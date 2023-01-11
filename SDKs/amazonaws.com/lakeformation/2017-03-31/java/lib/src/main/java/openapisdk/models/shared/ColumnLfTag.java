package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnLfTag
 * A structure containing the name of a column resource and the tags attached to it.
**/
public class ColumnLfTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTags")
    public LfTagPair[] lfTags;
    public ColumnLfTag withLfTags(LfTagPair[] lfTags) {
        this.lfTags = lfTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ColumnLfTag withName(String name) {
        this.name = name;
        return this;
    }
}
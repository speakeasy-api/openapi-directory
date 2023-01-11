package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentGroupList
 * Specifies the settings that define the relationships between segment groups for a segment.
**/
public class SegmentGroupList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Groups")
    public SegmentGroup[] groups;
    public SegmentGroupList withGroups(SegmentGroup[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Include")
    public IncludeEnum include;
    public SegmentGroupList withInclude(IncludeEnum include) {
        this.include = include;
        return this;
    }
}
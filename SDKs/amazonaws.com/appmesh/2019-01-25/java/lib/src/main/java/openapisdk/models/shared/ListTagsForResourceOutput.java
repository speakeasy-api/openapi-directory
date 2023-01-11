package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForResourceOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class ListTagsForResourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTagsForResourceOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("tags")
    public TagRef[] tags;
    public ListTagsForResourceOutput withTags(TagRef[] tags) {
        this.tags = tags;
        return this;
    }
}
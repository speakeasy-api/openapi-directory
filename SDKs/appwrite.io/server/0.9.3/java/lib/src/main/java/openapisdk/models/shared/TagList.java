package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagList
 * Tags List
**/
public class TagList {
    @JsonProperty("sum")
    public Integer sum;
    public TagList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public TagList withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
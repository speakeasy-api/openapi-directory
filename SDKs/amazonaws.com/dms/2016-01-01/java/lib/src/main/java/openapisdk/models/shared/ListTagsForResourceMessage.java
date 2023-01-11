package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForResourceMessage
 * <p/>
**/
public class ListTagsForResourceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public ListTagsForResourceMessage withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArnList")
    public String[] resourceArnList;
    public ListTagsForResourceMessage withResourceArnList(String[] resourceArnList) {
        this.resourceArnList = resourceArnList;
        return this;
    }
}
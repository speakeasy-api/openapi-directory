package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public ListTagsForResourceRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}
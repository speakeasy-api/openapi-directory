package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBlobOutput
 * Represents the output of a get blob operation.
**/
public class GetBlobOutput {
    @JsonProperty("content")
    public String content;
    public GetBlobOutput withContent(String content) {
        this.content = content;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadMultipartPartRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public UploadMultipartPartRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetJobOutputOutput
 * Contains the Amazon S3 Glacier response to your request.
**/
public class GetJobOutputOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public GetJobOutputOutput withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetJobOutputOutput withStatus(Long status) {
        this.status = status;
        return this;
    }
}
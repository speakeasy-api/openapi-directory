package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchResponse
 * A response object returned from a batch request.
**/
public class BatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public BatchResponse withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public BatchResponse withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Long statusCode;
    public BatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WriteRequest
 * This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
**/
public class WriteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteRequest")
    public DeleteRequest deleteRequest;
    public WriteRequest withDeleteRequest(DeleteRequest deleteRequest) {
        this.deleteRequest = deleteRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PutRequest")
    public PutRequest putRequest;
    public WriteRequest withPutRequest(PutRequest putRequest) {
        this.putRequest = putRequest;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsSuccess")
    public java.util.Map<String, Object> isSuccess;
    public DeleteTokenResponse withIsSuccess(java.util.Map<String, Object> isSuccess) {
        this.isSuccess = isSuccess;
        return this;
    }
}
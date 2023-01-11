package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SigninResponse
 * Response when you successfully create a signin record
**/
public class SigninResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Long result;
    public SigninResponse withResult(Long result) {
        this.result = result;
        return this;
    }
}
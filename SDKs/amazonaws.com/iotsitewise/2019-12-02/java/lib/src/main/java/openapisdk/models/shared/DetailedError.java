package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DetailedError
 * Contains detailed error information. 
**/
public class DetailedError {
    @JsonProperty("code")
    public DetailedErrorCodeEnum code;
    public DetailedError withCode(DetailedErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public DetailedError withMessage(String message) {
        this.message = message;
        return this;
    }
}
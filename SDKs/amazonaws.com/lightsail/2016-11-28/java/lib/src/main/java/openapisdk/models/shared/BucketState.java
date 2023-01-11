package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketState
 * Describes the state of an Amazon Lightsail bucket.
**/
public class BucketState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BucketState withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public BucketState withMessage(String message) {
        this.message = message;
        return this;
    }
}
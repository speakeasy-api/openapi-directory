package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnprocessedIdentityId
 * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
**/
public class UnprocessedIdentityId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public ErrorCodeEnum errorCode;
    public UnprocessedIdentityId withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public UnprocessedIdentityId withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
}
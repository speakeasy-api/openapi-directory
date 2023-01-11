package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutResolverQueryLogConfigPolicyResponse
 * The response to a <code>PutResolverQueryLogConfigPolicy</code> request.
**/
public class PutResolverQueryLogConfigPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValue")
    public Boolean returnValue;
    public PutResolverQueryLogConfigPolicyResponse withReturnValue(Boolean returnValue) {
        this.returnValue = returnValue;
        return this;
    }
}
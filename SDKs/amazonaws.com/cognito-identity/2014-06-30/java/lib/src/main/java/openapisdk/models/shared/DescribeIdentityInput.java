package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeIdentityInput
 * Input to the <code>DescribeIdentity</code> action.
**/
public class DescribeIdentityInput {
    @JsonProperty("IdentityId")
    public String identityId;
    public DescribeIdentityInput withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
}
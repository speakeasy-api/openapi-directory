package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeIdentityPoolInput
 * Input to the DescribeIdentityPool action.
**/
public class DescribeIdentityPoolInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public DescribeIdentityPoolInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}
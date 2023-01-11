package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeIdentityPoolUsageResponse
 * Response to a successful DescribeIdentityPoolUsage request.
**/
public class DescribeIdentityPoolUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolUsage")
    public IdentityPoolUsage identityPoolUsage;
    public DescribeIdentityPoolUsageResponse withIdentityPoolUsage(IdentityPoolUsage identityPoolUsage) {
        this.identityPoolUsage = identityPoolUsage;
        return this;
    }
}
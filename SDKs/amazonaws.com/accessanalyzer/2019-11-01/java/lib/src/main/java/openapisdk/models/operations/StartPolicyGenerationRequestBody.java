package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartPolicyGenerationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public StartPolicyGenerationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudTrailDetails")
    public StartPolicyGenerationRequestBodyCloudTrailDetails cloudTrailDetails;
    public StartPolicyGenerationRequestBody withCloudTrailDetails(StartPolicyGenerationRequestBodyCloudTrailDetails cloudTrailDetails) {
        this.cloudTrailDetails = cloudTrailDetails;
        return this;
    }
    @JsonProperty("policyGenerationDetails")
    public StartPolicyGenerationRequestBodyPolicyGenerationDetails policyGenerationDetails;
    public StartPolicyGenerationRequestBody withPolicyGenerationDetails(StartPolicyGenerationRequestBodyPolicyGenerationDetails policyGenerationDetails) {
        this.policyGenerationDetails = policyGenerationDetails;
        return this;
    }
}
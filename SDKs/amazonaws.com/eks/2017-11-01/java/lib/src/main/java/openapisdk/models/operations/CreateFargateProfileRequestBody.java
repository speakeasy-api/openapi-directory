package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFargateProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateFargateProfileRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("fargateProfileName")
    public String fargateProfileName;
    public CreateFargateProfileRequestBody withFargateProfileName(String fargateProfileName) {
        this.fargateProfileName = fargateProfileName;
        return this;
    }
    @JsonProperty("podExecutionRoleArn")
    public String podExecutionRoleArn;
    public CreateFargateProfileRequestBody withPodExecutionRoleArn(String podExecutionRoleArn) {
        this.podExecutionRoleArn = podExecutionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectors")
    public openapisdk.models.shared.FargateProfileSelector[] selectors;
    public CreateFargateProfileRequestBody withSelectors(openapisdk.models.shared.FargateProfileSelector[] selectors) {
        this.selectors = selectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public String[] subnets;
    public CreateFargateProfileRequestBody withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateFargateProfileRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
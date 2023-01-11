package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAccessPolicyResponse {
    @JsonProperty("accessPolicyArn")
    public String accessPolicyArn;
    public CreateAccessPolicyResponse withAccessPolicyArn(String accessPolicyArn) {
        this.accessPolicyArn = accessPolicyArn;
        return this;
    }
    @JsonProperty("accessPolicyId")
    public String accessPolicyId;
    public CreateAccessPolicyResponse withAccessPolicyId(String accessPolicyId) {
        this.accessPolicyId = accessPolicyId;
        return this;
    }
}
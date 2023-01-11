package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePolicyVersionResponse
 * The output of the CreatePolicyVersion operation.
**/
public class CreatePolicyVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefaultVersion")
    public Boolean isDefaultVersion;
    public CreatePolicyVersionResponse withIsDefaultVersion(Boolean isDefaultVersion) {
        this.isDefaultVersion = isDefaultVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyArn")
    public String policyArn;
    public CreatePolicyVersionResponse withPolicyArn(String policyArn) {
        this.policyArn = policyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDocument")
    public String policyDocument;
    public CreatePolicyVersionResponse withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyVersionId")
    public String policyVersionId;
    public CreatePolicyVersionResponse withPolicyVersionId(String policyVersionId) {
        this.policyVersionId = policyVersionId;
        return this;
    }
}
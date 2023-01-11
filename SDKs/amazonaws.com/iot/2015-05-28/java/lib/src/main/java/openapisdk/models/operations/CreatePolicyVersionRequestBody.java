package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePolicyVersionRequestBody {
    @JsonProperty("policyDocument")
    public String policyDocument;
    public CreatePolicyVersionRequestBody withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
}
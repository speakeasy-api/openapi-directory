package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePolicyRequestBody {
    @JsonProperty("policyDocument")
    public String policyDocument;
    public CreatePolicyRequestBody withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreatePolicyRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
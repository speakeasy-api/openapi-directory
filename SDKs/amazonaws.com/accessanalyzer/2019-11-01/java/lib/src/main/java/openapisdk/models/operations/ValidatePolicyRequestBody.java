package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidatePolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public ValidatePolicyRequestBodyLocaleEnum locale;
    public ValidatePolicyRequestBody withLocale(ValidatePolicyRequestBodyLocaleEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonProperty("policyDocument")
    public String policyDocument;
    public ValidatePolicyRequestBody withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonProperty("policyType")
    public ValidatePolicyRequestBodyPolicyTypeEnum policyType;
    public ValidatePolicyRequestBody withPolicyType(ValidatePolicyRequestBodyPolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
}
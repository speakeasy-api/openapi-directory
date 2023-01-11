package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HmipcRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public HmipcRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public HmipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public HmipcRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
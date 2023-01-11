package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvipcRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public CvipcRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public CvipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public CvipcRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
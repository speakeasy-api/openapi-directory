package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PripcRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public PripcRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public PripcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public PripcRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
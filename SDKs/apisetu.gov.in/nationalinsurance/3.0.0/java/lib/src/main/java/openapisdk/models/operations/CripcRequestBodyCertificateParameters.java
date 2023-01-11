package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public CripcRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public CripcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public CripcRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MiipcRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public MiipcRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public MiipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public MiipcRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
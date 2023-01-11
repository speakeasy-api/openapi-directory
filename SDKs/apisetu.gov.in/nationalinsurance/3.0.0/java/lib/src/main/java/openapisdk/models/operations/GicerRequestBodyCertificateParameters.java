package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GicerRequestBodyCertificateParameters {
    @JsonProperty("customer_Id")
    public String customerId;
    public GicerRequestBodyCertificateParameters withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonProperty("policy_Number")
    public String policyNumber;
    public GicerRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("policy_StartDate")
    public String policyStartDate;
    public GicerRequestBodyCertificateParameters withPolicyStartDate(String policyStartDate) {
        this.policyStartDate = policyStartDate;
        return this;
    }
}
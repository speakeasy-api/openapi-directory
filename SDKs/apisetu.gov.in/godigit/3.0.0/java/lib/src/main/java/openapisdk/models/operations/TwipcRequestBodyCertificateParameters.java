package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwipcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public TwipcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public TwipcRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public TwipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public TwipcRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public TwipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("SearchDocument")
    public String searchDocument;
    public TwipcRequestBodyCertificateParameters withSearchDocument(String searchDocument) {
        this.searchDocument = searchDocument;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CvipcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public CvipcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public CvipcRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public CvipcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public CvipcRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public CvipcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("SearchDocument")
    public String searchDocument;
    public CvipcRequestBodyCertificateParameters withSearchDocument(String searchDocument) {
        this.searchDocument = searchDocument;
        return this;
    }
}
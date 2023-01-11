package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public CripcRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DocumentNumber")
    public String documentNumber;
    public CripcRequestBodyCertificateParameters withDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public CripcRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public CripcRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PolicyNumber")
    public String policyNumber;
    public CripcRequestBodyCertificateParameters withPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
        return this;
    }
    @JsonProperty("SearchDocument")
    public String searchDocument;
    public CripcRequestBodyCertificateParameters withSearchDocument(String searchDocument) {
        this.searchDocument = searchDocument;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EscerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public EscerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("DOCID")
    public String docid;
    public EscerRequestBodyCertificateParameters withDocid(String docid) {
        this.docid = docid;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public EscerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CtcerRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public CtcerRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("CertificateID")
    public String certificateID;
    public CtcerRequestBodyCertificateParameters withCertificateId(String certificateID) {
        this.certificateID = certificateID;
        return this;
    }
}
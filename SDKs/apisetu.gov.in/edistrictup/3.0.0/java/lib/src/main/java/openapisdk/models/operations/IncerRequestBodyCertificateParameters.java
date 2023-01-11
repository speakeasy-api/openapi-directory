package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IncerRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public IncerRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("CertificateID")
    public String certificateID;
    public IncerRequestBodyCertificateParameters withCertificateId(String certificateID) {
        this.certificateID = certificateID;
        return this;
    }
}
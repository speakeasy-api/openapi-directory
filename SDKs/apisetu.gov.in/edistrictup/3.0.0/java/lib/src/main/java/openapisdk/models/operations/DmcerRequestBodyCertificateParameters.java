package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DmcerRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public DmcerRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("CertificateID")
    public String certificateID;
    public DmcerRequestBodyCertificateParameters withCertificateId(String certificateID) {
        this.certificateID = certificateID;
        return this;
    }
}
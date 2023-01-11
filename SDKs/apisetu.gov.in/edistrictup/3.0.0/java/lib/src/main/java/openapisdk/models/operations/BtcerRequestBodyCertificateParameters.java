package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public BtcerRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("CertificateID")
    public String certificateID;
    public BtcerRequestBodyCertificateParameters withCertificateId(String certificateID) {
        this.certificateID = certificateID;
        return this;
    }
}
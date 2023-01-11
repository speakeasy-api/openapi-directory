package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DpicrRequestBodyCertificateParameters {
    @JsonProperty("ApplicationNo")
    public String applicationNo;
    public DpicrRequestBodyCertificateParameters withApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
        return this;
    }
    @JsonProperty("CertificateID")
    public String certificateID;
    public DpicrRequestBodyCertificateParameters withCertificateId(String certificateID) {
        this.certificateID = certificateID;
        return this;
    }
}
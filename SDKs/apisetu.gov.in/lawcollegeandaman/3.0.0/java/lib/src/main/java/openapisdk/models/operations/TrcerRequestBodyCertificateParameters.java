package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrcerRequestBodyCertificateParameters {
    @JsonProperty("ADMN_NO")
    public String admnNO;
    public TrcerRequestBodyCertificateParameters withAdmnNo(String admnNO) {
        this.admnNO = admnNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public TrcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("cardno")
    public String cardno;
    public GovidRequestBodyCertificateParameters withCardno(String cardno) {
        this.cardno = cardno;
        return this;
    }
}
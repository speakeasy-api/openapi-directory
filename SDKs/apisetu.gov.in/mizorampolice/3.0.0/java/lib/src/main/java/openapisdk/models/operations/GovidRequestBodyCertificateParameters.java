package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GovidRequestBodyCertificateParameters {
    @JsonProperty("CARD_NO")
    public String cardNO;
    public GovidRequestBodyCertificateParameters withCardNo(String cardNO) {
        this.cardNO = cardNO;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public GovidRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}
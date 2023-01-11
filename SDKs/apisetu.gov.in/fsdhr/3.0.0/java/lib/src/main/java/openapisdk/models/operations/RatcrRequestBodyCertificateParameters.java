package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RatcrRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RatcrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("card_no")
    public String cardNo;
    public RatcrRequestBodyCertificateParameters withCardNo(String cardNo) {
        this.cardNo = cardNo;
        return this;
    }
}
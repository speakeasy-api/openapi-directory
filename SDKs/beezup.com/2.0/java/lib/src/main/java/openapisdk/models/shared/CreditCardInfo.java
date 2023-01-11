package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreditCardInfo {
    @JsonProperty("cardNumber")
    public String cardNumber;
    public CreditCardInfo withCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
        return this;
    }
    @JsonProperty("cardVerificationCode")
    public String cardVerificationCode;
    public CreditCardInfo withCardVerificationCode(String cardVerificationCode) {
        this.cardVerificationCode = cardVerificationCode;
        return this;
    }
    @JsonProperty("expirationMonth")
    public Integer expirationMonth;
    public CreditCardInfo withExpirationMonth(Integer expirationMonth) {
        this.expirationMonth = expirationMonth;
        return this;
    }
    @JsonProperty("expirationYear")
    public Integer expirationYear;
    public CreditCardInfo withExpirationYear(Integer expirationYear) {
        this.expirationYear = expirationYear;
        return this;
    }
}
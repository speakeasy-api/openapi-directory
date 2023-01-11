package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentCardInput
 * A card's non-confidential details.
**/
public class PaymentCardInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_address")
    public Address billingAddress;
    public PaymentCardInput withBillingAddress(Address billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bin")
    public String bin;
    public PaymentCardInput withBin(String bin) {
        this.bin = bin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_brand")
    public PaymentCardCardBrandEnum cardBrand;
    public PaymentCardInput withCardBrand(PaymentCardCardBrandEnum cardBrand) {
        this.cardBrand = cardBrand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_type")
    public PaymentCardCardTypeEnum cardType;
    public PaymentCardInput withCardType(PaymentCardCardTypeEnum cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardholder_name")
    public String cardholderName;
    public PaymentCardInput withCardholderName(String cardholderName) {
        this.cardholderName = cardholderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public PaymentCardInput withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public PaymentCardInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_month")
    public Long expMonth;
    public PaymentCardInput withExpMonth(Long expMonth) {
        this.expMonth = expMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_year")
    public Long expYear;
    public PaymentCardInput withExpYear(Long expYear) {
        this.expYear = expYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PaymentCardInput withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_4")
    public String last4;
    public PaymentCardInput withLast4(String last4) {
        this.last4 = last4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public String merchantId;
    public PaymentCardInput withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaid_type")
    public PaymentCardPrepaidTypeEnum prepaidType;
    public PaymentCardInput withPrepaidType(PaymentCardPrepaidTypeEnum prepaidType) {
        this.prepaidType = prepaidType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_id")
    public String referenceId;
    public PaymentCardInput withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public PaymentCardInput withVersion(String version) {
        this.version = version;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentCard
 * A card's non-confidential details.
**/
public class PaymentCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_address")
    public Address billingAddress;
    public PaymentCard withBillingAddress(Address billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bin")
    public String bin;
    public PaymentCard withBin(String bin) {
        this.bin = bin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_brand")
    public PaymentCardCardBrandEnum cardBrand;
    public PaymentCard withCardBrand(PaymentCardCardBrandEnum cardBrand) {
        this.cardBrand = cardBrand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_type")
    public PaymentCardCardTypeEnum cardType;
    public PaymentCard withCardType(PaymentCardCardTypeEnum cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardholder_name")
    public String cardholderName;
    public PaymentCard withCardholderName(String cardholderName) {
        this.cardholderName = cardholderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public PaymentCard withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public PaymentCard withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_month")
    public Long expMonth;
    public PaymentCard withExpMonth(Long expMonth) {
        this.expMonth = expMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp_year")
    public Long expYear;
    public PaymentCard withExpYear(Long expYear) {
        this.expYear = expYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PaymentCard withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PaymentCard withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_4")
    public String last4;
    public PaymentCard withLast4(String last4) {
        this.last4 = last4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public String merchantId;
    public PaymentCard withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaid_type")
    public PaymentCardPrepaidTypeEnum prepaidType;
    public PaymentCard withPrepaidType(PaymentCardPrepaidTypeEnum prepaidType) {
        this.prepaidType = prepaidType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_id")
    public String referenceId;
    public PaymentCard withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public PaymentCard withVersion(String version) {
        this.version = version;
        return this;
    }
}
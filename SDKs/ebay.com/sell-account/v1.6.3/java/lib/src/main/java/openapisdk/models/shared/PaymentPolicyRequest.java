package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentPolicyRequest
 * This root container defines a seller's payment policy for a specific marketplace and category type. Used when creating or updating a payment policy, paymentPolicyRequest encapsulates a seller's terms for how buyers can pay for the items they buy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
public class PaymentPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public PaymentPolicyRequest withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deposit")
    public Deposit deposit;
    public PaymentPolicyRequest withDeposit(Deposit deposit) {
        this.deposit = deposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PaymentPolicyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullPaymentDueIn")
    public TimeDuration fullPaymentDueIn;
    public PaymentPolicyRequest withFullPaymentDueIn(TimeDuration fullPaymentDueIn) {
        this.fullPaymentDueIn = fullPaymentDueIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immediatePay")
    public Boolean immediatePay;
    public PaymentPolicyRequest withImmediatePay(Boolean immediatePay) {
        this.immediatePay = immediatePay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public PaymentPolicyRequest withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PaymentPolicyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentInstructions")
    public String paymentInstructions;
    public PaymentPolicyRequest withPaymentInstructions(String paymentInstructions) {
        this.paymentInstructions = paymentInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethods")
    public PaymentMethod[] paymentMethods;
    public PaymentPolicyRequest withPaymentMethods(PaymentMethod[] paymentMethods) {
        this.paymentMethods = paymentMethods;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentPolicy
 * Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
**/
public class PaymentPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public PaymentPolicy withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deposit")
    public Deposit deposit;
    public PaymentPolicy withDeposit(Deposit deposit) {
        this.deposit = deposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PaymentPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullPaymentDueIn")
    public TimeDuration fullPaymentDueIn;
    public PaymentPolicy withFullPaymentDueIn(TimeDuration fullPaymentDueIn) {
        this.fullPaymentDueIn = fullPaymentDueIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immediatePay")
    public Boolean immediatePay;
    public PaymentPolicy withImmediatePay(Boolean immediatePay) {
        this.immediatePay = immediatePay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public PaymentPolicy withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PaymentPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentInstructions")
    public String paymentInstructions;
    public PaymentPolicy withPaymentInstructions(String paymentInstructions) {
        this.paymentInstructions = paymentInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethods")
    public PaymentMethod[] paymentMethods;
    public PaymentPolicy withPaymentMethods(PaymentMethod[] paymentMethods) {
        this.paymentMethods = paymentMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentPolicyId")
    public String paymentPolicyId;
    public PaymentPolicy withPaymentPolicyId(String paymentPolicyId) {
        this.paymentPolicyId = paymentPolicyId;
        return this;
    }
}
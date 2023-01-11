package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetPaymentPolicyResponse
 * Complex type that that gets populated with a response containing a payment policy.
**/
public class SetPaymentPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTypes")
    public CategoryType[] categoryTypes;
    public SetPaymentPolicyResponse withCategoryTypes(CategoryType[] categoryTypes) {
        this.categoryTypes = categoryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deposit")
    public Deposit deposit;
    public SetPaymentPolicyResponse withDeposit(Deposit deposit) {
        this.deposit = deposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SetPaymentPolicyResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullPaymentDueIn")
    public TimeDuration fullPaymentDueIn;
    public SetPaymentPolicyResponse withFullPaymentDueIn(TimeDuration fullPaymentDueIn) {
        this.fullPaymentDueIn = fullPaymentDueIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("immediatePay")
    public Boolean immediatePay;
    public SetPaymentPolicyResponse withImmediatePay(Boolean immediatePay) {
        this.immediatePay = immediatePay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public SetPaymentPolicyResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SetPaymentPolicyResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentInstructions")
    public String paymentInstructions;
    public SetPaymentPolicyResponse withPaymentInstructions(String paymentInstructions) {
        this.paymentInstructions = paymentInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethods")
    public PaymentMethod[] paymentMethods;
    public SetPaymentPolicyResponse withPaymentMethods(PaymentMethod[] paymentMethods) {
        this.paymentMethods = paymentMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentPolicyId")
    public String paymentPolicyId;
    public SetPaymentPolicyResponse withPaymentPolicyId(String paymentPolicyId) {
        this.paymentPolicyId = paymentPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public SetPaymentPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}
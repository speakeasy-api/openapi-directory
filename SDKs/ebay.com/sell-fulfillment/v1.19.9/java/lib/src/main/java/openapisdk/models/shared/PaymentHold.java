package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentHold
 * This type contains information about a hold placed on a payment to a seller for an order, including the reason why the buyer's payment for the order is being held, the expected release date of the funds into the seller's account, the current state of the hold, and the actual release date if the payment has been released, and possible actions the seller can take to expedite the payout of funds into their account.
**/
public class PaymentHold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedReleaseDate")
    public String expectedReleaseDate;
    public PaymentHold withExpectedReleaseDate(String expectedReleaseDate) {
        this.expectedReleaseDate = expectedReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdAmount")
    public Amount holdAmount;
    public PaymentHold withHoldAmount(Amount holdAmount) {
        this.holdAmount = holdAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdReason")
    public String holdReason;
    public PaymentHold withHoldReason(String holdReason) {
        this.holdReason = holdReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdState")
    public String holdState;
    public PaymentHold withHoldState(String holdState) {
        this.holdState = holdState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public String releaseDate;
    public PaymentHold withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerActionsToRelease")
    public SellerActionsToRelease[] sellerActionsToRelease;
    public PaymentHold withSellerActionsToRelease(SellerActionsToRelease[] sellerActionsToRelease) {
        this.sellerActionsToRelease = sellerActionsToRelease;
        return this;
    }
}
/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ItvPurchaseStrongRequest - Details of a purchase request.
 */
public class ItvPurchaseStrongRequest {
    /**
     * A paymentMethodFromToken.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodFromToken")
    public String paymentMethodFromToken;

    public ItvPurchaseStrongRequest withPaymentMethodFromToken(String paymentMethodFromToken) {
        this.paymentMethodFromToken = paymentMethodFromToken;
        return this;
    }
    
    /**
     * A paymentMethodId from Stripe.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;

    public ItvPurchaseStrongRequest withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    
    /**
     * The identifier of the plan to purchase.
     */
    @JsonProperty("planId")
    public String planId;

    public ItvPurchaseStrongRequest withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    
    /**
     * The ITV profile token.
     */
    @JsonProperty("profileToken")
    public String profileToken;

    public ItvPurchaseStrongRequest withProfileToken(String profileToken) {
        this.profileToken = profileToken;
        return this;
    }
    
    /**
     * A coupon/voucher for a discount.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucher")
    public String voucher;

    public ItvPurchaseStrongRequest withVoucher(String voucher) {
        this.voucher = voucher;
        return this;
    }
    
    public ItvPurchaseStrongRequest(@JsonProperty("planId") String planId, @JsonProperty("profileToken") String profileToken) {
        this.planId = planId;
        this.profileToken = profileToken;
  }
}

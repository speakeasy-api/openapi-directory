import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invoice line item type
 */
export declare enum InvoiceLineItemEntityTypeEnum {
    Invoice = "invoice",
    InvoiceAdjustment = "invoice_adjustment",
    UsageOverage = "usage_overage",
    UserOverage = "user_overage",
    AddonSubscription = "addon_subscription",
    MiscFee = "misc_fee",
    UsageOverageAdjustment = "usage_overage_adjustment",
    UserOverageAdjustment = "user_overage_adjustment",
    AddonSubscriptionAdjustment = "addon_subscription_adjustment",
    MiscFeeAdjustment = "misc_fee_adjustment",
    CreditExpiration = "credit_expiration"
}
export declare class InvoiceLineItemEntity extends SpeakeasyBase {
    /**
     * Invoice line item amount
     */
    amount?: number;
    /**
     * Invoice line item created at date/time
     */
    createdAt?: Date;
    /**
     * Invoice line item description
     */
    description?: string;
    /**
     * Plan name
     */
    plan?: string;
    /**
     * Invoice line item service end date/time
     */
    serviceEndAt?: Date;
    /**
     * Invoice line item service start date/time
     */
    serviceStartAt?: Date;
    /**
     * Site name
     */
    site?: string;
    /**
     * Invoice line item type
     */
    type?: InvoiceLineItemEntityTypeEnum;
    /**
     * Invoice line item updated date/time
     */
    updatedAt?: Date;
}

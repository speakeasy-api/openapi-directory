import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency in which the <code>limitPrice</code> amount is specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum PurchaseReservedInstancesOfferingRequestLimitPriceCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.
 */
export declare class PurchaseReservedInstancesOfferingRequestLimitPrice extends SpeakeasyBase {
    amount?: number;
    currencyCode?: PurchaseReservedInstancesOfferingRequestLimitPriceCurrencyCodeEnum;
}
/**
 * Contains the parameters for PurchaseReservedInstancesOffering.
 */
export declare class PurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
    dryRun?: boolean;
    instanceCount: number;
    limitPrice?: PurchaseReservedInstancesOfferingRequestLimitPrice;
    purchaseTime?: Date;
    reservedInstancesOfferingId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPurchaseReservedInstancesOfferingActionEnum {
    PurchaseReservedInstancesOffering = "PurchaseReservedInstancesOffering"
}
/**
 * The currency in which the <code>limitPrice</code> amount is specified. At this time, the only supported currency is <code>USD</code>.
 */
export declare enum GETPurchaseReservedInstancesOfferingLimitPriceCurrencyCodeEnum {
    Usd = "USD"
}
/**
 * Describes the limit price of a Reserved Instance offering.
 */
export declare class GETPurchaseReservedInstancesOfferingLimitPrice extends SpeakeasyBase {
    amount?: number;
    currencyCode?: GETPurchaseReservedInstancesOfferingLimitPriceCurrencyCodeEnum;
}
export declare enum GETPurchaseReservedInstancesOfferingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETPurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
    action: GETPurchaseReservedInstancesOfferingActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The number of Reserved Instances to purchase.
     */
    instanceCount: number;
    /**
     * Specified for Reserved Instance Marketplace offerings to limit the total order and ensure that the Reserved Instances are not purchased at unexpected prices.
     */
    limitPrice?: GETPurchaseReservedInstancesOfferingLimitPrice;
    /**
     * The time at which to purchase the Reserved Instance, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     */
    purchaseTime?: Date;
    /**
     * The ID of the Reserved Instance offering to purchase.
     */
    reservedInstancesOfferingId: string;
    version: GETPurchaseReservedInstancesOfferingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPurchaseReservedInstancesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

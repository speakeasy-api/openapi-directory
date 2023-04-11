import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}
export declare enum GETPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
    action: GETPurchaseReservedNodeOfferingActionEnum;
    /**
     * <p>The number of reserved nodes that you want to purchase.</p> <p>Default: <code>1</code> </p>
     */
    nodeCount?: number;
    /**
     * The unique identifier of the reserved node offering you want to purchase.
     */
    reservedNodeOfferingId: string;
    version: GETPurchaseReservedNodeOfferingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

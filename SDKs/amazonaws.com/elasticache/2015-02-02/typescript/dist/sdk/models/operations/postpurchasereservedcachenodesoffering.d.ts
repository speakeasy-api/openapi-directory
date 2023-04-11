import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPurchaseReservedCacheNodesOfferingActionEnum {
    PurchaseReservedCacheNodesOffering = "PurchaseReservedCacheNodesOffering"
}
export declare enum POSTPurchaseReservedCacheNodesOfferingVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTPurchaseReservedCacheNodesOfferingRequest extends SpeakeasyBase {
    action: POSTPurchaseReservedCacheNodesOfferingActionEnum;
    requestBody?: Uint8Array;
    version: POSTPurchaseReservedCacheNodesOfferingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPurchaseReservedCacheNodesOfferingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

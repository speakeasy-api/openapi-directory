import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PurchaseReservedNodesOfferingXAmzTargetEnum {
    AmazonMemoryDBPurchaseReservedNodesOffering = "AmazonMemoryDB.PurchaseReservedNodesOffering"
}
export declare class PurchaseReservedNodesOfferingRequest extends SpeakeasyBase {
    purchaseReservedNodesOfferingRequest: shared.PurchaseReservedNodesOfferingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PurchaseReservedNodesOfferingXAmzTargetEnum;
}
export declare class PurchaseReservedNodesOfferingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    purchaseReservedNodesOfferingResponse?: shared.PurchaseReservedNodesOfferingResponse;
    /**
     * ReservedNodeAlreadyExistsFault
     */
    reservedNodeAlreadyExistsFault?: any;
    /**
     * ReservedNodeQuotaExceededFault
     */
    reservedNodeQuotaExceededFault?: any;
    /**
     * ReservedNodesOfferingNotFoundFault
     */
    reservedNodesOfferingNotFoundFault?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
}

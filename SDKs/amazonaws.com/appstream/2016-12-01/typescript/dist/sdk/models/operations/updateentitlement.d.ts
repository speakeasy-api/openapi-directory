import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEntitlementXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateEntitlement = "PhotonAdminProxyService.UpdateEntitlement"
}
export declare class UpdateEntitlementRequest extends SpeakeasyBase {
    updateEntitlementRequest: shared.UpdateEntitlementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEntitlementXAmzTargetEnum;
}
export declare class UpdateEntitlementResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * EntitlementNotFoundException
     */
    entitlementNotFoundException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateEntitlementResult?: shared.UpdateEntitlementResult;
}

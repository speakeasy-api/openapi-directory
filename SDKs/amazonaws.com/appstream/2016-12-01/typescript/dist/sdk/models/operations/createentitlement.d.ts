import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEntitlementXAmzTargetEnum {
    PhotonAdminProxyServiceCreateEntitlement = "PhotonAdminProxyService.CreateEntitlement"
}
export declare class CreateEntitlementRequest extends SpeakeasyBase {
    createEntitlementRequest: shared.CreateEntitlementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEntitlementXAmzTargetEnum;
}
export declare class CreateEntitlementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEntitlementResult?: shared.CreateEntitlementResult;
    /**
     * EntitlementAlreadyExistsException
     */
    entitlementAlreadyExistsException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

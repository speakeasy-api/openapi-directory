import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateApplicationToEntitlementXAmzTargetEnum {
    PhotonAdminProxyServiceAssociateApplicationToEntitlement = "PhotonAdminProxyService.AssociateApplicationToEntitlement"
}
export declare class AssociateApplicationToEntitlementRequest extends SpeakeasyBase {
    associateApplicationToEntitlementRequest: shared.AssociateApplicationToEntitlementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateApplicationToEntitlementXAmzTargetEnum;
}
export declare class AssociateApplicationToEntitlementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateApplicationToEntitlementResult?: Record<string, any>;
    contentType: string;
    /**
     * EntitlementNotFoundException
     */
    entitlementNotFoundException?: any;
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

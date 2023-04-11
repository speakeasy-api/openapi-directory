import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateApplicationFromEntitlementXAmzTargetEnum {
    PhotonAdminProxyServiceDisassociateApplicationFromEntitlement = "PhotonAdminProxyService.DisassociateApplicationFromEntitlement"
}
export declare class DisassociateApplicationFromEntitlementRequest extends SpeakeasyBase {
    disassociateApplicationFromEntitlementRequest: shared.DisassociateApplicationFromEntitlementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateApplicationFromEntitlementXAmzTargetEnum;
}
export declare class DisassociateApplicationFromEntitlementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateApplicationFromEntitlementResult?: Record<string, any>;
    /**
     * EntitlementNotFoundException
     */
    entitlementNotFoundException?: any;
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

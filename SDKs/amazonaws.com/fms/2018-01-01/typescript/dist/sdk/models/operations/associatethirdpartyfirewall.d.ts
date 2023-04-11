import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateThirdPartyFirewallXAmzTargetEnum {
    AWSFMS20180101AssociateThirdPartyFirewall = "AWSFMS_20180101.AssociateThirdPartyFirewall"
}
export declare class AssociateThirdPartyFirewallRequest extends SpeakeasyBase {
    associateThirdPartyFirewallRequest: shared.AssociateThirdPartyFirewallRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateThirdPartyFirewallXAmzTargetEnum;
}
export declare class AssociateThirdPartyFirewallResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateThirdPartyFirewallResponse?: shared.AssociateThirdPartyFirewallResponse;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateThirdPartyFirewallXAmzTargetEnum {
    AWSFMS20180101DisassociateThirdPartyFirewall = "AWSFMS_20180101.DisassociateThirdPartyFirewall"
}
export declare class DisassociateThirdPartyFirewallRequest extends SpeakeasyBase {
    disassociateThirdPartyFirewallRequest: shared.DisassociateThirdPartyFirewallRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateThirdPartyFirewallXAmzTargetEnum;
}
export declare class DisassociateThirdPartyFirewallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateThirdPartyFirewallResponse?: shared.DisassociateThirdPartyFirewallResponse;
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

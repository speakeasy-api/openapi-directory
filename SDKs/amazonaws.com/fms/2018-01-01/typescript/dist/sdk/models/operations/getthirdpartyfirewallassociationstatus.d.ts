import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetThirdPartyFirewallAssociationStatusXAmzTargetEnum {
    AWSFMS20180101GetThirdPartyFirewallAssociationStatus = "AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus"
}
export declare class GetThirdPartyFirewallAssociationStatusRequest extends SpeakeasyBase {
    getThirdPartyFirewallAssociationStatusRequest: shared.GetThirdPartyFirewallAssociationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetThirdPartyFirewallAssociationStatusXAmzTargetEnum;
}
export declare class GetThirdPartyFirewallAssociationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getThirdPartyFirewallAssociationStatusResponse?: shared.GetThirdPartyFirewallAssociationStatusResponse;
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

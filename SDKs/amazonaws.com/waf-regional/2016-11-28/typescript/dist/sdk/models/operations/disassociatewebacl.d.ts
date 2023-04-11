import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateWebACLXAmzTargetEnum {
    AWSWAFRegional20161128DisassociateWebACL = "AWSWAF_Regional_20161128.DisassociateWebACL"
}
export declare class DisassociateWebACLRequest extends SpeakeasyBase {
    disassociateWebACLRequest: shared.DisassociateWebACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateWebACLXAmzTargetEnum;
}
export declare class DisassociateWebACLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateWebACLResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}

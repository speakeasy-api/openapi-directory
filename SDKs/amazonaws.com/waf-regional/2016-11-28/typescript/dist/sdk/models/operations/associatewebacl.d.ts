import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateWebACLXAmzTargetEnum {
    AWSWAFRegional20161128AssociateWebACL = "AWSWAF_Regional_20161128.AssociateWebACL"
}
export declare class AssociateWebACLRequest extends SpeakeasyBase {
    associateWebACLRequest: shared.AssociateWebACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateWebACLXAmzTargetEnum;
}
export declare class AssociateWebACLResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateWebACLResponse?: Record<string, any>;
    contentType: string;
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
    /**
     * WAFUnavailableEntityException
     */
    wafUnavailableEntityException?: any;
}

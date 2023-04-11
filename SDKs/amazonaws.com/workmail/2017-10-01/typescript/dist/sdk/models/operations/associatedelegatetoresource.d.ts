import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateDelegateToResourceXAmzTargetEnum {
    WorkMailServiceAssociateDelegateToResource = "WorkMailService.AssociateDelegateToResource"
}
export declare class AssociateDelegateToResourceRequest extends SpeakeasyBase {
    associateDelegateToResourceRequest: shared.AssociateDelegateToResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDelegateToResourceXAmzTargetEnum;
}
export declare class AssociateDelegateToResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateDelegateToResourceResponse?: Record<string, any>;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

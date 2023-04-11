import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTagKeysXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126GetTagKeys = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"
}
export declare class GetTagKeysRequest extends SpeakeasyBase {
    getTagKeysInput: shared.GetTagKeysInput;
    /**
     * Pagination token
     */
    paginationToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagKeysXAmzTargetEnum;
}
export declare class GetTagKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTagKeysOutput?: shared.GetTagKeysOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * PaginationTokenExpiredException
     */
    paginationTokenExpiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}

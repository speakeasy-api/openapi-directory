import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsXAmzTargetEnum {
    OpsWorks20130218ListTags = "OpsWorks_20130218.ListTags"
}
export declare class ListTagsRequest extends SpeakeasyBase {
    listTagsRequest: shared.ListTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTagsResult?: shared.ListTagsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

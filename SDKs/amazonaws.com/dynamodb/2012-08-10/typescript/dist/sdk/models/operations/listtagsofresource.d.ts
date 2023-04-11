import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsOfResourceXAmzTargetEnum {
    DynamoDB20120810ListTagsOfResource = "DynamoDB_20120810.ListTagsOfResource"
}
export declare class ListTagsOfResourceRequest extends SpeakeasyBase {
    listTagsOfResourceInput: shared.ListTagsOfResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsOfResourceXAmzTargetEnum;
}
export declare class ListTagsOfResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listTagsOfResourceOutput?: shared.ListTagsOfResourceOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

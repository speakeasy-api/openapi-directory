import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsLogGroupXAmzTargetEnum {
    Logs20140328ListTagsLogGroup = "Logs_20140328.ListTagsLogGroup"
}
export declare class ListTagsLogGroupRequest extends SpeakeasyBase {
    listTagsLogGroupRequest: shared.ListTagsLogGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsLogGroupXAmzTargetEnum;
}
export declare class ListTagsLogGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTagsLogGroupResponse?: shared.ListTagsLogGroupResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the group that was generated on creation.
     */
    groupARN?: string;
    /**
     * The case-sensitive name of the group.
     */
    groupName?: string;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    requestBody: GetGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getGroupResult?: shared.GetGroupResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}

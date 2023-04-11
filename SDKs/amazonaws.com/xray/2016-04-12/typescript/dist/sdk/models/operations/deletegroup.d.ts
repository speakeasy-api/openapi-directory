import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the group that was generated on creation.
     */
    groupARN?: string;
    /**
     * The case-sensitive name of the group.
     */
    groupName?: string;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    requestBody: DeleteGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGroupResult?: Record<string, any>;
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

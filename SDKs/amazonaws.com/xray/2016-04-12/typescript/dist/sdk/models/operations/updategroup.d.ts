import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The structure containing configurations related to insights.
 */
export declare class UpdateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
    insightsEnabled?: boolean;
    notificationsEnabled?: boolean;
}
export declare class UpdateGroupRequestBody extends SpeakeasyBase {
    /**
     * The updated filter expression defining criteria by which to group traces.
     */
    filterExpression?: string;
    /**
     * The ARN that was generated upon creation.
     */
    groupARN?: string;
    /**
     * The case-sensitive name of the group.
     */
    groupName?: string;
    /**
     * The structure containing configurations related to insights.
     */
    insightsConfiguration?: UpdateGroupRequestBodyInsightsConfiguration;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    requestBody: UpdateGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateGroupResult?: shared.UpdateGroupResult;
}

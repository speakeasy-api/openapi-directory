import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGameServerGroupsXAmzTargetEnum {
    GameLiftListGameServerGroups = "GameLift.ListGameServerGroups"
}
export declare class ListGameServerGroupsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listGameServerGroupsInput: shared.ListGameServerGroupsInput;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGameServerGroupsXAmzTargetEnum;
}
export declare class ListGameServerGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listGameServerGroupsOutput?: shared.ListGameServerGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}

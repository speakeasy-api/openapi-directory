import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEnvironmentAccountConnectionsXAmzTargetEnum {
    AwsProton20200720ListEnvironmentAccountConnections = "AwsProton20200720.ListEnvironmentAccountConnections"
}
export declare class ListEnvironmentAccountConnectionsRequest extends SpeakeasyBase {
    listEnvironmentAccountConnectionsInput: shared.ListEnvironmentAccountConnectionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentAccountConnectionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListEnvironmentAccountConnectionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listEnvironmentAccountConnectionsOutput?: shared.ListEnvironmentAccountConnectionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

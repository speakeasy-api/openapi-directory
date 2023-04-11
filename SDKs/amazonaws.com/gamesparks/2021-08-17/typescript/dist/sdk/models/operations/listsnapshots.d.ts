import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSnapshotsRequest extends SpeakeasyBase {
    /**
     * The name of the game.
     */
    gameName: string;
    /**
     * <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
     */
    maxResults?: number;
    /**
     * <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSnapshotsResponse extends SpeakeasyBase {
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
    listSnapshotsResult?: shared.ListSnapshotsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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

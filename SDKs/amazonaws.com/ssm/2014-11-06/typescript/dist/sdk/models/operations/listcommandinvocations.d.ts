import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCommandInvocationsXAmzTargetEnum {
    AmazonSSMListCommandInvocations = "AmazonSSM.ListCommandInvocations"
}
export declare class ListCommandInvocationsRequest extends SpeakeasyBase {
    listCommandInvocationsRequest: shared.ListCommandInvocationsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: ListCommandInvocationsXAmzTargetEnum;
}
export declare class ListCommandInvocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidCommandId
     */
    invalidCommandId?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listCommandInvocationsResult?: shared.ListCommandInvocationsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

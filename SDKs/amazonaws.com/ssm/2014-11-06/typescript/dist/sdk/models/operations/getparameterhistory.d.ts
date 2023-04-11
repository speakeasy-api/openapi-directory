import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParameterHistoryXAmzTargetEnum {
    AmazonSSMGetParameterHistory = "AmazonSSM.GetParameterHistory"
}
export declare class GetParameterHistoryRequest extends SpeakeasyBase {
    getParameterHistoryRequest: shared.GetParameterHistoryRequest;
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
    xAmzTarget: GetParameterHistoryXAmzTargetEnum;
}
export declare class GetParameterHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getParameterHistoryResult?: shared.GetParameterHistoryResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidKeyId
     */
    invalidKeyId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * ParameterNotFound
     */
    parameterNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

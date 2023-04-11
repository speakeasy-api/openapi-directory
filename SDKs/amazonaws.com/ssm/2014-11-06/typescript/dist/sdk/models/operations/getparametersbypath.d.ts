import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParametersByPathXAmzTargetEnum {
    AmazonSSMGetParametersByPath = "AmazonSSM.GetParametersByPath"
}
export declare class GetParametersByPathRequest extends SpeakeasyBase {
    getParametersByPathRequest: shared.GetParametersByPathRequest;
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
    xAmzTarget: GetParametersByPathXAmzTargetEnum;
}
export declare class GetParametersByPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getParametersByPathResult?: shared.GetParametersByPathResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidFilterOption
     */
    invalidFilterOption?: any;
    /**
     * InvalidFilterValue
     */
    invalidFilterValue?: any;
    /**
     * InvalidKeyId
     */
    invalidKeyId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

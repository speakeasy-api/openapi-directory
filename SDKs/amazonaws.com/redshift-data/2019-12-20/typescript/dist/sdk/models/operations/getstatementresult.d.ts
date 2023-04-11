import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetStatementResultXAmzTargetEnum {
    RedshiftDataGetStatementResult = "RedshiftData.GetStatementResult"
}
export declare class GetStatementResultRequest extends SpeakeasyBase {
    getStatementResultRequest: shared.GetStatementResultRequest;
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
    xAmzTarget: GetStatementResultXAmzTargetEnum;
}
export declare class GetStatementResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getStatementResultResponse?: shared.GetStatementResultResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

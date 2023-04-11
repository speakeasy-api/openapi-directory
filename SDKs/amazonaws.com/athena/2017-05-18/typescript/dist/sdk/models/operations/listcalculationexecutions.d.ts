import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCalculationExecutionsXAmzTargetEnum {
    AmazonAthenaListCalculationExecutions = "AmazonAthena.ListCalculationExecutions"
}
export declare class ListCalculationExecutionsRequest extends SpeakeasyBase {
    listCalculationExecutionsRequest: shared.ListCalculationExecutionsRequest;
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
    xAmzTarget: ListCalculationExecutionsXAmzTargetEnum;
}
export declare class ListCalculationExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listCalculationExecutionsResponse?: shared.ListCalculationExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

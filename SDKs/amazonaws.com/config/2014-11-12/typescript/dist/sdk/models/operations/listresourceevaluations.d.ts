import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceEvaluationsXAmzTargetEnum {
    StarlingDoveServiceListResourceEvaluations = "StarlingDoveService.ListResourceEvaluations"
}
export declare class ListResourceEvaluationsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listResourceEvaluationsRequest: shared.ListResourceEvaluationsRequest;
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
    xAmzTarget: ListResourceEvaluationsXAmzTargetEnum;
}
export declare class ListResourceEvaluationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidTimeRangeException
     */
    invalidTimeRangeException?: any;
    /**
     * Success
     */
    listResourceEvaluationsResponse?: shared.ListResourceEvaluationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

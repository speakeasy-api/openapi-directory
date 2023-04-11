import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetClassifiersXAmzTargetEnum {
    AWSGlueGetClassifiers = "AWSGlue.GetClassifiers"
}
export declare class GetClassifiersRequest extends SpeakeasyBase {
    getClassifiersRequest: shared.GetClassifiersRequest;
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
    xAmzTarget: GetClassifiersXAmzTargetEnum;
}
export declare class GetClassifiersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getClassifiersResponse?: shared.GetClassifiersResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

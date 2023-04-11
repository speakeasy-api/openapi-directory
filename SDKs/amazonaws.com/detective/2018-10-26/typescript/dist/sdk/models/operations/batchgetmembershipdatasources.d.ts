import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetMembershipDatasourcesRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the behavior graph.
     */
    graphArns: string[];
}
export declare class BatchGetMembershipDatasourcesRequest extends SpeakeasyBase {
    requestBody: BatchGetMembershipDatasourcesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetMembershipDatasourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchGetMembershipDatasourcesResponse?: shared.BatchGetMembershipDatasourcesResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

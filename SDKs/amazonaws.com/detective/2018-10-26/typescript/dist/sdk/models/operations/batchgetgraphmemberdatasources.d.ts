import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetGraphMemberDatasourcesRequestBody extends SpeakeasyBase {
    /**
     * The list of Amazon Web Services accounts to get data source package information on.
     */
    accountIds: string[];
    /**
     * The ARN of the behavior graph.
     */
    graphArn: string;
}
export declare class BatchGetGraphMemberDatasourcesRequest extends SpeakeasyBase {
    requestBody: BatchGetGraphMemberDatasourcesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetGraphMemberDatasourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchGetGraphMemberDatasourcesResponse?: shared.BatchGetGraphMemberDatasourcesResponse;
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

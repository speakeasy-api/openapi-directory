import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetCollectionXAmzTargetEnum {
    OpenSearchServerlessBatchGetCollection = "OpenSearchServerless.BatchGetCollection"
}
export declare class BatchGetCollectionRequest extends SpeakeasyBase {
    batchGetCollectionRequest: shared.BatchGetCollectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCollectionXAmzTargetEnum;
}
export declare class BatchGetCollectionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetCollectionResponse?: shared.BatchGetCollectionResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

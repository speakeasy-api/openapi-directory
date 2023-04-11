import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectEntitiesXAmzTargetEnum {
    Comprehend20171127BatchDetectEntities = "Comprehend_20171127.BatchDetectEntities"
}
export declare class BatchDetectEntitiesRequest extends SpeakeasyBase {
    batchDetectEntitiesRequest: shared.BatchDetectEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectEntitiesXAmzTargetEnum;
}
export declare class BatchDetectEntitiesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectEntitiesResponse?: shared.BatchDetectEntitiesResponse;
    /**
     * BatchSizeLimitExceededException
     */
    batchSizeLimitExceededException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * UnsupportedLanguageException
     */
    unsupportedLanguageException?: any;
}

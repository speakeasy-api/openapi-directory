import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectEntitiesXAmzTargetEnum {
    Comprehend20171127DetectEntities = "Comprehend_20171127.DetectEntities"
}
export declare class DetectEntitiesRequest extends SpeakeasyBase {
    detectEntitiesRequest: shared.DetectEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectEntitiesXAmzTargetEnum;
}
export declare class DetectEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectEntitiesResponse?: shared.DetectEntitiesResponse;
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
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * UnsupportedLanguageException
     */
    unsupportedLanguageException?: any;
}

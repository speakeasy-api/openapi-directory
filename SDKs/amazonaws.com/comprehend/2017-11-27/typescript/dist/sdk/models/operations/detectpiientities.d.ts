import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectPiiEntitiesXAmzTargetEnum {
    Comprehend20171127DetectPiiEntities = "Comprehend_20171127.DetectPiiEntities"
}
export declare class DetectPiiEntitiesRequest extends SpeakeasyBase {
    detectPiiEntitiesRequest: shared.DetectPiiEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectPiiEntitiesXAmzTargetEnum;
}
export declare class DetectPiiEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectPiiEntitiesResponse?: shared.DetectPiiEntitiesResponse;
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

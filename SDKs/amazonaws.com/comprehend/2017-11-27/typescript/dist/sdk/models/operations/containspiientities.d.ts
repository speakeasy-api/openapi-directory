import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ContainsPiiEntitiesXAmzTargetEnum {
    Comprehend20171127ContainsPiiEntities = "Comprehend_20171127.ContainsPiiEntities"
}
export declare class ContainsPiiEntitiesRequest extends SpeakeasyBase {
    containsPiiEntitiesRequest: shared.ContainsPiiEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ContainsPiiEntitiesXAmzTargetEnum;
}
export declare class ContainsPiiEntitiesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    containsPiiEntitiesResponse?: shared.ContainsPiiEntitiesResponse;
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

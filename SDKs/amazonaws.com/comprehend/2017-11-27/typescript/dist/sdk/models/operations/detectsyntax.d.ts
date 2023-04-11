import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectSyntaxXAmzTargetEnum {
    Comprehend20171127DetectSyntax = "Comprehend_20171127.DetectSyntax"
}
export declare class DetectSyntaxRequest extends SpeakeasyBase {
    detectSyntaxRequest: shared.DetectSyntaxRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectSyntaxXAmzTargetEnum;
}
export declare class DetectSyntaxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectSyntaxResponse?: shared.DetectSyntaxResponse;
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

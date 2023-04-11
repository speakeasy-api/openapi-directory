import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationXAmzTargetEnum {
    KinesisAnalytics20150814CreateApplication = "KinesisAnalytics_20150814.CreateApplication"
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    createApplicationRequest: shared.CreateApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    /**
     * CodeValidationException
     */
    codeValidationException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createApplicationResponse?: shared.CreateApplicationResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}

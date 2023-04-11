import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplication = "KinesisAnalytics_20180523.CreateApplication"
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

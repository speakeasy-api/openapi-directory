import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateActivityXAmzTargetEnum {
    AWSStepFunctionsCreateActivity = "AWSStepFunctions.CreateActivity"
}
export declare class CreateActivityRequest extends SpeakeasyBase {
    createActivityInput: shared.CreateActivityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActivityXAmzTargetEnum;
}
export declare class CreateActivityResponse extends SpeakeasyBase {
    /**
     * ActivityLimitExceeded
     */
    activityLimitExceeded?: any;
    contentType: string;
    /**
     * Success
     */
    createActivityOutput?: shared.CreateActivityOutput;
    /**
     * InvalidName
     */
    invalidName?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTags
     */
    tooManyTags?: any;
}

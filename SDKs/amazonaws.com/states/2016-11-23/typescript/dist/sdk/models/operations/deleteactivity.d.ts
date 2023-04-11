import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteActivityXAmzTargetEnum {
    AWSStepFunctionsDeleteActivity = "AWSStepFunctions.DeleteActivity"
}
export declare class DeleteActivityRequest extends SpeakeasyBase {
    deleteActivityInput: shared.DeleteActivityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActivityXAmzTargetEnum;
}
export declare class DeleteActivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteActivityOutput?: Record<string, any>;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

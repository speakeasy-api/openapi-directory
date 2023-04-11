import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartNotebookInstanceXAmzTargetEnum {
    SageMakerStartNotebookInstance = "SageMaker.StartNotebookInstance"
}
export declare class StartNotebookInstanceRequest extends SpeakeasyBase {
    startNotebookInstanceInput: shared.StartNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartNotebookInstanceXAmzTargetEnum;
}
export declare class StartNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

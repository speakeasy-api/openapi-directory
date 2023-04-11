import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopNotebookInstanceXAmzTargetEnum {
    SageMakerStopNotebookInstance = "SageMaker.StopNotebookInstance"
}
export declare class StopNotebookInstanceRequest extends SpeakeasyBase {
    stopNotebookInstanceInput: shared.StopNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopNotebookInstanceXAmzTargetEnum;
}
export declare class StopNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

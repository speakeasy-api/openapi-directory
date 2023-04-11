import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNotebookInstanceXAmzTargetEnum {
    SageMakerCreateNotebookInstance = "SageMaker.CreateNotebookInstance"
}
export declare class CreateNotebookInstanceRequest extends SpeakeasyBase {
    createNotebookInstanceInput: shared.CreateNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotebookInstanceXAmzTargetEnum;
}
export declare class CreateNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNotebookInstanceOutput?: shared.CreateNotebookInstanceOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

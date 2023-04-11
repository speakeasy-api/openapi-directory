import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNotebookInstanceXAmzTargetEnum {
    SageMakerDeleteNotebookInstance = "SageMaker.DeleteNotebookInstance"
}
export declare class DeleteNotebookInstanceRequest extends SpeakeasyBase {
    deleteNotebookInstanceInput: shared.DeleteNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotebookInstanceXAmzTargetEnum;
}
export declare class DeleteNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

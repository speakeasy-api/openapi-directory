import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDeleteNotebookInstanceLifecycleConfig = "SageMaker.DeleteNotebookInstanceLifecycleConfig"
}
export declare class DeleteNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    deleteNotebookInstanceLifecycleConfigInput: shared.DeleteNotebookInstanceLifecycleConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class DeleteNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

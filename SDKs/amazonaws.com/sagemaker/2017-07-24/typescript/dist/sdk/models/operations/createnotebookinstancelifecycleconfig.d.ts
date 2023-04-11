import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerCreateNotebookInstanceLifecycleConfig = "SageMaker.CreateNotebookInstanceLifecycleConfig"
}
export declare class CreateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    createNotebookInstanceLifecycleConfigInput: shared.CreateNotebookInstanceLifecycleConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class CreateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNotebookInstanceLifecycleConfigOutput?: shared.CreateNotebookInstanceLifecycleConfigOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

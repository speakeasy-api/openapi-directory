import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerUpdateNotebookInstanceLifecycleConfig = "SageMaker.UpdateNotebookInstanceLifecycleConfig"
}
export declare class UpdateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    updateNotebookInstanceLifecycleConfigInput: shared.UpdateNotebookInstanceLifecycleConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class UpdateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * Success
     */
    updateNotebookInstanceLifecycleConfigOutput?: Record<string, any>;
}

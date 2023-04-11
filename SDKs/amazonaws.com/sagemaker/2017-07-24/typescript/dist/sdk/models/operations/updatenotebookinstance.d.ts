import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotebookInstanceXAmzTargetEnum {
    SageMakerUpdateNotebookInstance = "SageMaker.UpdateNotebookInstance"
}
export declare class UpdateNotebookInstanceRequest extends SpeakeasyBase {
    updateNotebookInstanceInput: shared.UpdateNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookInstanceXAmzTargetEnum;
}
export declare class UpdateNotebookInstanceResponse extends SpeakeasyBase {
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
    updateNotebookInstanceOutput?: Record<string, any>;
}

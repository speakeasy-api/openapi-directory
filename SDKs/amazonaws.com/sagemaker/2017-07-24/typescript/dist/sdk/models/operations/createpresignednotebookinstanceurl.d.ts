import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePresignedNotebookInstanceUrlXAmzTargetEnum {
    SageMakerCreatePresignedNotebookInstanceUrl = "SageMaker.CreatePresignedNotebookInstanceUrl"
}
export declare class CreatePresignedNotebookInstanceUrlRequest extends SpeakeasyBase {
    createPresignedNotebookInstanceUrlInput: shared.CreatePresignedNotebookInstanceUrlInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePresignedNotebookInstanceUrlXAmzTargetEnum;
}
export declare class CreatePresignedNotebookInstanceUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPresignedNotebookInstanceUrlOutput?: shared.CreatePresignedNotebookInstanceUrlOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

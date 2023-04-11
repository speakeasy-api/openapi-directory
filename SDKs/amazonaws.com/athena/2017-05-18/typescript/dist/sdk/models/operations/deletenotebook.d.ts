import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNotebookXAmzTargetEnum {
    AmazonAthenaDeleteNotebook = "AmazonAthena.DeleteNotebook"
}
export declare class DeleteNotebookRequest extends SpeakeasyBase {
    deleteNotebookInput: shared.DeleteNotebookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNotebookXAmzTargetEnum;
}
export declare class DeleteNotebookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteNotebookOutput?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

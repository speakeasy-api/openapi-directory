import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNotebookXAmzTargetEnum {
    AmazonAthenaCreateNotebook = "AmazonAthena.CreateNotebook"
}
export declare class CreateNotebookRequest extends SpeakeasyBase {
    createNotebookInput: shared.CreateNotebookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNotebookXAmzTargetEnum;
}
export declare class CreateNotebookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNotebookOutput?: shared.CreateNotebookOutput;
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

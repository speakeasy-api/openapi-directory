import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotebookXAmzTargetEnum {
    AmazonAthenaUpdateNotebook = "AmazonAthena.UpdateNotebook"
}
export declare class UpdateNotebookRequest extends SpeakeasyBase {
    updateNotebookInput: shared.UpdateNotebookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookXAmzTargetEnum;
}
export declare class UpdateNotebookResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateNotebookOutput?: Record<string, any>;
}

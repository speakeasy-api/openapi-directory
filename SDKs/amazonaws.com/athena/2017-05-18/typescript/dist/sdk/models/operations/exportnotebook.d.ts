import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportNotebookXAmzTargetEnum {
    AmazonAthenaExportNotebook = "AmazonAthena.ExportNotebook"
}
export declare class ExportNotebookRequest extends SpeakeasyBase {
    exportNotebookInput: shared.ExportNotebookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportNotebookXAmzTargetEnum;
}
export declare class ExportNotebookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exportNotebookOutput?: shared.ExportNotebookOutput;
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

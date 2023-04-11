import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportNotebookXAmzTargetEnum {
    AmazonAthenaImportNotebook = "AmazonAthena.ImportNotebook"
}
export declare class ImportNotebookRequest extends SpeakeasyBase {
    importNotebookInput: shared.ImportNotebookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportNotebookXAmzTargetEnum;
}
export declare class ImportNotebookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importNotebookOutput?: shared.ImportNotebookOutput;
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

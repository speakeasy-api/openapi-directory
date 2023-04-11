import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNotebookMetadataXAmzTargetEnum {
    AmazonAthenaListNotebookMetadata = "AmazonAthena.ListNotebookMetadata"
}
export declare class ListNotebookMetadataRequest extends SpeakeasyBase {
    listNotebookMetadataInput: shared.ListNotebookMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookMetadataXAmzTargetEnum;
}
export declare class ListNotebookMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listNotebookMetadataOutput?: shared.ListNotebookMetadataOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNotebookMetadataXAmzTargetEnum {
    AmazonAthenaGetNotebookMetadata = "AmazonAthena.GetNotebookMetadata"
}
export declare class GetNotebookMetadataRequest extends SpeakeasyBase {
    getNotebookMetadataInput: shared.GetNotebookMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNotebookMetadataXAmzTargetEnum;
}
export declare class GetNotebookMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getNotebookMetadataOutput?: shared.GetNotebookMetadataOutput;
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

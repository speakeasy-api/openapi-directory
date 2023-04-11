import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotebookMetadataXAmzTargetEnum {
    AmazonAthenaUpdateNotebookMetadata = "AmazonAthena.UpdateNotebookMetadata"
}
export declare class UpdateNotebookMetadataRequest extends SpeakeasyBase {
    updateNotebookMetadataInput: shared.UpdateNotebookMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotebookMetadataXAmzTargetEnum;
}
export declare class UpdateNotebookMetadataResponse extends SpeakeasyBase {
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
    updateNotebookMetadataOutput?: Record<string, any>;
}

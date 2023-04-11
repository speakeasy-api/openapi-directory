import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePresignedNotebookUrlXAmzTargetEnum {
    AmazonAthenaCreatePresignedNotebookUrl = "AmazonAthena.CreatePresignedNotebookUrl"
}
export declare class CreatePresignedNotebookUrlRequest extends SpeakeasyBase {
    createPresignedNotebookUrlRequest: shared.CreatePresignedNotebookUrlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePresignedNotebookUrlXAmzTargetEnum;
}
export declare class CreatePresignedNotebookUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPresignedNotebookUrlResponse?: shared.CreatePresignedNotebookUrlResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

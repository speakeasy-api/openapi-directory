import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDocumentXAmzTargetEnum {
    AmazonSSMGetDocument = "AmazonSSM.GetDocument"
}
export declare class GetDocumentRequest extends SpeakeasyBase {
    getDocumentRequest: shared.GetDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentXAmzTargetEnum;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDocumentResult?: shared.GetDocumentResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:</p> <ul> <li>application/json</li> <li>application/xml</li> </ul>
 */
export declare enum UploadDocumentsContentTypeEnum {
    ApplicationJson = "application/json",
    ApplicationXml = "application/xml"
}
export declare class UploadDocumentsRequestBody extends SpeakeasyBase {
    /**
     * A batch of documents formatted in JSON or HTML.
     */
    documents: string;
}
export declare enum UploadDocumentsFormatEnum {
    SDK = "sdk"
}
export declare class UploadDocumentsRequest extends SpeakeasyBase {
    /**
     * <p>The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:</p> <ul> <li>application/json</li> <li>application/xml</li> </ul>
     */
    contentType: UploadDocumentsContentTypeEnum;
    requestBody: UploadDocumentsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    format: UploadDocumentsFormatEnum;
}
export declare class UploadDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentServiceException
     */
    documentServiceException?: shared.DocumentServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    uploadDocumentsResponse?: shared.UploadDocumentsResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDocumentDefaultVersionXAmzTargetEnum {
    AmazonSSMUpdateDocumentDefaultVersion = "AmazonSSM.UpdateDocumentDefaultVersion"
}
export declare class UpdateDocumentDefaultVersionRequest extends SpeakeasyBase {
    updateDocumentDefaultVersionRequest: shared.UpdateDocumentDefaultVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDocumentDefaultVersionXAmzTargetEnum;
}
export declare class UpdateDocumentDefaultVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentSchemaVersion
     */
    invalidDocumentSchemaVersion?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDocumentDefaultVersionResult?: shared.UpdateDocumentDefaultVersionResult;
}

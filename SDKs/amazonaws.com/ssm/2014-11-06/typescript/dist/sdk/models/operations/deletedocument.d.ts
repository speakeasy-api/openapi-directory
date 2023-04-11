import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDocumentXAmzTargetEnum {
    AmazonSSMDeleteDocument = "AmazonSSM.DeleteDocument"
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    deleteDocumentRequest: shared.DeleteDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDocumentXAmzTargetEnum;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    /**
     * AssociatedInstances
     */
    associatedInstances?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDocumentResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentOperation
     */
    invalidDocumentOperation?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

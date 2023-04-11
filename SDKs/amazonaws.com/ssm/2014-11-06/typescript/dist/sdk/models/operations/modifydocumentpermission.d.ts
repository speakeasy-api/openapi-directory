import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyDocumentPermissionXAmzTargetEnum {
    AmazonSSMModifyDocumentPermission = "AmazonSSM.ModifyDocumentPermission"
}
export declare class ModifyDocumentPermissionRequest extends SpeakeasyBase {
    modifyDocumentPermissionRequest: shared.ModifyDocumentPermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyDocumentPermissionXAmzTargetEnum;
}
export declare class ModifyDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentLimitExceeded
     */
    documentLimitExceeded?: any;
    /**
     * DocumentPermissionLimit
     */
    documentPermissionLimit?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidPermissionType
     */
    invalidPermissionType?: any;
    /**
     * Success
     */
    modifyDocumentPermissionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

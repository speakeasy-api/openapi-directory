import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddAttachmentsToSetXAmzTargetEnum {
    AWSSupport20130415AddAttachmentsToSet = "AWSSupport_20130415.AddAttachmentsToSet"
}
export declare class AddAttachmentsToSetRequest extends SpeakeasyBase {
    addAttachmentsToSetRequest: shared.AddAttachmentsToSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAttachmentsToSetXAmzTargetEnum;
}
export declare class AddAttachmentsToSetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addAttachmentsToSetResponse?: shared.AddAttachmentsToSetResponse;
    /**
     * AttachmentLimitExceeded
     */
    attachmentLimitExceeded?: any;
    /**
     * AttachmentSetExpired
     */
    attachmentSetExpired?: any;
    /**
     * AttachmentSetIdNotFound
     */
    attachmentSetIdNotFound?: any;
    /**
     * AttachmentSetSizeLimitExceeded
     */
    attachmentSetSizeLimitExceeded?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

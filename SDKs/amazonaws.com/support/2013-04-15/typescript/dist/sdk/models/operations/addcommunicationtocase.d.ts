import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddCommunicationToCaseXAmzTargetEnum {
    AWSSupport20130415AddCommunicationToCase = "AWSSupport_20130415.AddCommunicationToCase"
}
export declare class AddCommunicationToCaseRequest extends SpeakeasyBase {
    addCommunicationToCaseRequest: shared.AddCommunicationToCaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCommunicationToCaseXAmzTargetEnum;
}
export declare class AddCommunicationToCaseResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addCommunicationToCaseResponse?: shared.AddCommunicationToCaseResponse;
    /**
     * AttachmentSetExpired
     */
    attachmentSetExpired?: any;
    /**
     * AttachmentSetIdNotFound
     */
    attachmentSetIdNotFound?: any;
    /**
     * CaseIdNotFound
     */
    caseIdNotFound?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

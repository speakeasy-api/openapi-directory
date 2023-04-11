import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCaseXAmzTargetEnum {
    AWSSupport20130415CreateCase = "AWSSupport_20130415.CreateCase"
}
export declare class CreateCaseRequest extends SpeakeasyBase {
    createCaseRequest: shared.CreateCaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCaseXAmzTargetEnum;
}
export declare class CreateCaseResponse extends SpeakeasyBase {
    /**
     * AttachmentSetExpired
     */
    attachmentSetExpired?: any;
    /**
     * AttachmentSetIdNotFound
     */
    attachmentSetIdNotFound?: any;
    /**
     * CaseCreationLimitExceeded
     */
    caseCreationLimitExceeded?: any;
    contentType: string;
    /**
     * Success
     */
    createCaseResponse?: shared.CreateCaseResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

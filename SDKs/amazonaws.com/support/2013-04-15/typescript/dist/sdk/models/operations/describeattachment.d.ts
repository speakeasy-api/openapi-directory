import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAttachmentXAmzTargetEnum {
    AWSSupport20130415DescribeAttachment = "AWSSupport_20130415.DescribeAttachment"
}
export declare class DescribeAttachmentRequest extends SpeakeasyBase {
    describeAttachmentRequest: shared.DescribeAttachmentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttachmentXAmzTargetEnum;
}
export declare class DescribeAttachmentResponse extends SpeakeasyBase {
    /**
     * AttachmentIdNotFound
     */
    attachmentIdNotFound?: any;
    contentType: string;
    /**
     * DescribeAttachmentLimitExceeded
     */
    describeAttachmentLimitExceeded?: any;
    /**
     * Success
     */
    describeAttachmentResponse?: shared.DescribeAttachmentResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

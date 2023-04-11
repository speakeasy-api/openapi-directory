import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDocumentXAmzTargetEnum {
    AmazonSSMDescribeDocument = "AmazonSSM.DescribeDocument"
}
export declare class DescribeDocumentRequest extends SpeakeasyBase {
    describeDocumentRequest: shared.DescribeDocumentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentXAmzTargetEnum;
}
export declare class DescribeDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDocumentResult?: shared.DescribeDocumentResult;
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

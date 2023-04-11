import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDocumentPermissionXAmzTargetEnum {
    AmazonSSMDescribeDocumentPermission = "AmazonSSM.DescribeDocumentPermission"
}
export declare class DescribeDocumentPermissionRequest extends SpeakeasyBase {
    describeDocumentPermissionRequest: shared.DescribeDocumentPermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentPermissionXAmzTargetEnum;
}
export declare class DescribeDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDocumentPermissionResponse?: shared.DescribeDocumentPermissionResponse;
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
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * InvalidPermissionType
     */
    invalidPermissionType?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

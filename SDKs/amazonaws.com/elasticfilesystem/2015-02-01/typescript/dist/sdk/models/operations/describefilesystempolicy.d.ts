import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeFileSystemPolicyRequest extends SpeakeasyBase {
    /**
     * Specifies which EFS file system to retrieve the <code>FileSystemPolicy</code> for.
     */
    fileSystemId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFileSystemPolicyResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * Success
     */
    fileSystemPolicyDescription?: shared.FileSystemPolicyDescription;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * PolicyNotFound
     */
    policyNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutFileSystemPolicyRequestBody extends SpeakeasyBase {
    /**
     * (Optional) A boolean that specifies whether or not to bypass the <code>FileSystemPolicy</code> lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future <code>PutFileSystemPolicy</code> requests on this file system. Set <code>BypassPolicyLockoutSafetyCheck</code> to <code>True</code> only when you intend to prevent the IAM principal that is making the request from making subsequent <code>PutFileSystemPolicy</code> requests on this file system. The default value is <code>False</code>.
     */
    bypassPolicyLockoutSafetyCheck?: boolean;
    /**
     * The <code>FileSystemPolicy</code> that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">EFS Resource-based Policies</a>.
     */
    policy: string;
}
export declare class PutFileSystemPolicyRequest extends SpeakeasyBase {
    /**
     * The ID of the EFS file system that you want to create or update the <code>FileSystemPolicy</code> for.
     */
    fileSystemId: string;
    requestBody: PutFileSystemPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFileSystemPolicyResponse extends SpeakeasyBase {
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
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidPolicyException
     */
    invalidPolicyException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

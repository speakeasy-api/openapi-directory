import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutLifecycleConfigurationRequestBody extends SpeakeasyBase {
    /**
     * <p>An array of <code>LifecyclePolicy</code> objects that define the file system's <code>LifecycleConfiguration</code> object. A <code>LifecycleConfiguration</code> object informs EFS lifecycle management and EFS Intelligent-Tiering of the following:</p> <ul> <li> <p>When to move files in the file system from primary storage to the IA storage class.</p> </li> <li> <p>When to move files that are in IA storage to primary storage.</p> </li> </ul> <note> <p>When using the <code>put-lifecycle-configuration</code> CLI command or the <code>PutLifecycleConfiguration</code> API action, Amazon EFS requires that each <code>LifecyclePolicy</code> object have only a single transition. This means that in a request body, <code>LifecyclePolicies</code> must be structured as an array of <code>LifecyclePolicy</code> objects, one object for each transition, <code>TransitionToIA</code>, <code>TransitionToPrimaryStorageClass</code>. See the example requests in the following section for more information.</p> </note>
     */
    lifecyclePolicies: shared.LifecyclePolicy[];
}
export declare class PutLifecycleConfigurationRequest extends SpeakeasyBase {
    /**
     * The ID of the file system for which you are creating the <code>LifecycleConfiguration</code> object (String).
     */
    fileSystemId: string;
    requestBody: PutLifecycleConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLifecycleConfigurationResponse extends SpeakeasyBase {
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
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    lifecycleConfigurationDescription?: shared.LifecycleConfigurationDescription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

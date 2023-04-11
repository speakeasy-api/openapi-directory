import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
 */
export declare class CreateAccessPointRequestBodyPosixUser extends SpeakeasyBase {
    gid?: number;
    secondaryGids?: number[];
    uid?: number;
}
/**
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
 */
export declare class CreateAccessPointRequestBodyRootDirectory extends SpeakeasyBase {
    creationInfo?: shared.CreationInfo;
    path?: string;
}
export declare class CreateAccessPointRequestBody extends SpeakeasyBase {
    /**
     * A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
     */
    clientToken: string;
    /**
     * The ID of the EFS file system that the access point provides access to.
     */
    fileSystemId: string;
    /**
     * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
     */
    posixUser?: CreateAccessPointRequestBodyPosixUser;
    /**
     * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
     */
    rootDirectory?: CreateAccessPointRequestBodyRootDirectory;
    /**
     * Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.
     */
    tags?: shared.Tag[];
}
export declare class CreateAccessPointRequest extends SpeakeasyBase {
    requestBody: CreateAccessPointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAccessPointResponse extends SpeakeasyBase {
    /**
     * AccessPointAlreadyExists
     */
    accessPointAlreadyExists?: any;
    /**
     * Success
     */
    accessPointDescription?: shared.AccessPointDescription;
    /**
     * AccessPointLimitExceeded
     */
    accessPointLimitExceeded?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

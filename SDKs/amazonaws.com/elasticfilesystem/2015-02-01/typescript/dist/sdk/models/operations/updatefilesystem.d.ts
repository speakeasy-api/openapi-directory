import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * (Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.
 */
export declare enum UpdateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting",
    Provisioned = "provisioned",
    Elastic = "elastic"
}
export declare class UpdateFileSystemRequestBody extends SpeakeasyBase {
    /**
     * (Optional) Sets the amount of provisioned throughput, in MiB/s, for the file system. Valid values are 1-1024. If you are changing the throughput mode to provisioned, you must also provide the amount of provisioned throughput. Required if <code>ThroughputMode</code> is changed to <code>provisioned</code> on update.
     */
    provisionedThroughputInMibps?: number;
    /**
     * (Optional) Updates the file system's throughput mode. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the <code>ThroughputMode</code> to <code>provisioned</code>, you must also set a value for <code>ProvisionedThroughputInMibps</code>.
     */
    throughputMode?: UpdateFileSystemRequestBodyThroughputModeEnum;
}
export declare class UpdateFileSystemRequest extends SpeakeasyBase {
    /**
     * The ID of the file system that you want to update.
     */
    fileSystemId: string;
    requestBody: UpdateFileSystemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFileSystemResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    fileSystemDescription?: shared.FileSystemDescription;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * IncorrectFileSystemLifeCycleState
     */
    incorrectFileSystemLifeCycleState?: any;
    /**
     * InsufficientThroughputCapacity
     */
    insufficientThroughputCapacity?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThroughputLimitExceeded
     */
    throughputLimitExceeded?: any;
    /**
     * TooManyRequests
     */
    tooManyRequests?: any;
}

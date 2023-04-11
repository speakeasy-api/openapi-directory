import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBackupsXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeBackups = "AWSSimbaAPIService_v20180301.DescribeBackups"
}
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    describeBackupsRequest: shared.DescribeBackupsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupsXAmzTargetEnum;
}
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    /**
     * BackupNotFound
     */
    backupNotFound?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeBackupsResponse?: shared.DescribeBackupsResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}

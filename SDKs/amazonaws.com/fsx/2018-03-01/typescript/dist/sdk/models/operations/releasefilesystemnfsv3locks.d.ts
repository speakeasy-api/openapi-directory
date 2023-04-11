import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReleaseFileSystemNfsV3LocksXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301ReleaseFileSystemNfsV3Locks = "AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks"
}
export declare class ReleaseFileSystemNfsV3LocksRequest extends SpeakeasyBase {
    releaseFileSystemNfsV3LocksRequest: shared.ReleaseFileSystemNfsV3LocksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReleaseFileSystemNfsV3LocksXAmzTargetEnum;
}
export declare class ReleaseFileSystemNfsV3LocksResponse extends SpeakeasyBase {
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
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    releaseFileSystemNfsV3LocksResponse?: shared.ReleaseFileSystemNfsV3LocksResponse;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

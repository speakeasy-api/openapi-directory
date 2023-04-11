import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateClusterSnapshotRequestBody extends SpeakeasyBase {
    /**
     * The arn of the Elastic DocumentDB cluster that the snapshot will be taken from.
     */
    clusterArn: string;
    /**
     * The name of the Elastic DocumentDB snapshot.
     */
    snapshotName: string;
    /**
     * The tags to be assigned to the new Elastic DocumentDB snapshot.
     */
    tags?: Record<string, string>;
}
export declare class CreateClusterSnapshotRequest extends SpeakeasyBase {
    requestBody: CreateClusterSnapshotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateClusterSnapshotResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createClusterSnapshotOutput?: shared.CreateClusterSnapshotOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

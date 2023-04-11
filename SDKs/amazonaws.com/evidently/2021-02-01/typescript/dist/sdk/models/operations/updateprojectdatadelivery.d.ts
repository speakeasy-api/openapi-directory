import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure containing the CloudWatch Logs log group where the project stores evaluation events.
 */
export declare class UpdateProjectDataDeliveryRequestBodyCloudWatchLogs extends SpeakeasyBase {
    logGroup?: string;
}
/**
 * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
 */
export declare class UpdateProjectDataDeliveryRequestBodyS3Destination extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
export declare class UpdateProjectDataDeliveryRequestBody extends SpeakeasyBase {
    /**
     * A structure containing the CloudWatch Logs log group where the project stores evaluation events.
     */
    cloudWatchLogs?: UpdateProjectDataDeliveryRequestBodyCloudWatchLogs;
    /**
     * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
     */
    s3Destination?: UpdateProjectDataDeliveryRequestBodyS3Destination;
}
export declare class UpdateProjectDataDeliveryRequest extends SpeakeasyBase {
    requestBody: UpdateProjectDataDeliveryRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project that you want to modify the data storage options for.
     */
    project: string;
}
export declare class UpdateProjectDataDeliveryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateProjectDataDeliveryResponse?: shared.UpdateProjectDataDeliveryResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

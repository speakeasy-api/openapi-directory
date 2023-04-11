import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationSnapshot = "KinesisAnalytics_20180523.CreateApplicationSnapshot"
}
export declare class CreateApplicationSnapshotRequest extends SpeakeasyBase {
    createApplicationSnapshotRequest: shared.CreateApplicationSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationSnapshotXAmzTargetEnum;
}
export declare class CreateApplicationSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createApplicationSnapshotResponse?: Record<string, any>;
    /**
     * InvalidApplicationConfigurationException
     */
    invalidApplicationConfigurationException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

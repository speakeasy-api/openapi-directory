import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeliverConfigSnapshotXAmzTargetEnum {
    StarlingDoveServiceDeliverConfigSnapshot = "StarlingDoveService.DeliverConfigSnapshot"
}
export declare class DeliverConfigSnapshotRequest extends SpeakeasyBase {
    deliverConfigSnapshotRequest: shared.DeliverConfigSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeliverConfigSnapshotXAmzTargetEnum;
}
export declare class DeliverConfigSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deliverConfigSnapshotResponse?: shared.DeliverConfigSnapshotResponse;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    /**
     * NoRunningConfigurationRecorderException
     */
    noRunningConfigurationRecorderException?: any;
    /**
     * NoSuchDeliveryChannelException
     */
    noSuchDeliveryChannelException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopFleetXAmzTargetEnum {
    PhotonAdminProxyServiceStopFleet = "PhotonAdminProxyService.StopFleet"
}
export declare class StopFleetRequest extends SpeakeasyBase {
    stopFleetRequest: shared.StopFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopFleetXAmzTargetEnum;
}
export declare class StopFleetResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopFleetResult?: Record<string, any>;
}

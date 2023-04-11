import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateJobShipmentStateXAmzTargetEnum {
    AWSIESnowballJobManagementServiceUpdateJobShipmentState = "AWSIESnowballJobManagementService.UpdateJobShipmentState"
}
export declare class UpdateJobShipmentStateRequest extends SpeakeasyBase {
    updateJobShipmentStateRequest: shared.UpdateJobShipmentStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobShipmentStateXAmzTargetEnum;
}
export declare class UpdateJobShipmentStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateJobShipmentStateResult?: Record<string, any>;
}

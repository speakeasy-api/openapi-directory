import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDeviceFleetXAmzTargetEnum {
    SageMakerUpdateDeviceFleet = "SageMaker.UpdateDeviceFleet"
}
export declare class UpdateDeviceFleetRequest extends SpeakeasyBase {
    updateDeviceFleetRequest: shared.UpdateDeviceFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeviceFleetXAmzTargetEnum;
}
export declare class UpdateDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

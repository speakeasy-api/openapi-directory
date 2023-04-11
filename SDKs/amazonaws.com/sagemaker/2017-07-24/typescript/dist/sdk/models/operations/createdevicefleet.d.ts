import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeviceFleetXAmzTargetEnum {
    SageMakerCreateDeviceFleet = "SageMaker.CreateDeviceFleet"
}
export declare class CreateDeviceFleetRequest extends SpeakeasyBase {
    createDeviceFleetRequest: shared.CreateDeviceFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeviceFleetXAmzTargetEnum;
}
export declare class CreateDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

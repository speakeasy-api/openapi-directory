import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterDevicesXAmzTargetEnum {
    SageMakerDeregisterDevices = "SageMaker.DeregisterDevices"
}
export declare class DeregisterDevicesRequest extends SpeakeasyBase {
    deregisterDevicesRequest: shared.DeregisterDevicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterDevicesXAmzTargetEnum;
}
export declare class DeregisterDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

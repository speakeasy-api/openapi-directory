import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDevicesXAmzTargetEnum {
    SageMakerUpdateDevices = "SageMaker.UpdateDevices"
}
export declare class UpdateDevicesRequest extends SpeakeasyBase {
    updateDevicesRequest: shared.UpdateDevicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevicesXAmzTargetEnum;
}
export declare class UpdateDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDeviceFleetXAmzTargetEnum {
    SageMakerDeleteDeviceFleet = "SageMaker.DeleteDeviceFleet"
}
export declare class DeleteDeviceFleetRequest extends SpeakeasyBase {
    deleteDeviceFleetRequest: shared.DeleteDeviceFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeviceFleetXAmzTargetEnum;
}
export declare class DeleteDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

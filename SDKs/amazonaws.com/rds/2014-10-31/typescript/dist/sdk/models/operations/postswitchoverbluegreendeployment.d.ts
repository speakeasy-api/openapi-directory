import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSwitchoverBlueGreenDeploymentActionEnum {
    SwitchoverBlueGreenDeployment = "SwitchoverBlueGreenDeployment"
}
export declare enum POSTSwitchoverBlueGreenDeploymentVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTSwitchoverBlueGreenDeploymentRequest extends SpeakeasyBase {
    action: POSTSwitchoverBlueGreenDeploymentActionEnum;
    requestBody?: Uint8Array;
    version: POSTSwitchoverBlueGreenDeploymentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSwitchoverBlueGreenDeploymentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

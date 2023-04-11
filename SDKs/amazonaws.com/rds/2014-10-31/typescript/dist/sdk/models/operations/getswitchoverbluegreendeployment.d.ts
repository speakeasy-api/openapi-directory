import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSwitchoverBlueGreenDeploymentActionEnum {
    SwitchoverBlueGreenDeployment = "SwitchoverBlueGreenDeployment"
}
export declare enum GETSwitchoverBlueGreenDeploymentVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETSwitchoverBlueGreenDeploymentRequest extends SpeakeasyBase {
    action: GETSwitchoverBlueGreenDeploymentActionEnum;
    /**
     * <p>The blue/green deployment identifier.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing blue/green deployment identifier.</p> </li> </ul>
     */
    blueGreenDeploymentIdentifier: string;
    /**
     * <p>The amount of time, in seconds, for the switchover to complete. The default is 300.</p> <p>If the switchover takes longer than the specified duration, then any changes are rolled back, and no changes are made to the environments.</p>
     */
    switchoverTimeout?: number;
    version: GETSwitchoverBlueGreenDeploymentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSwitchoverBlueGreenDeploymentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

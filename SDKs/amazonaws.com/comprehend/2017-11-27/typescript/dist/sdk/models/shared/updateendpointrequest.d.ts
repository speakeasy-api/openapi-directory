import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    desiredDataAccessRoleArn?: string;
    desiredInferenceUnits?: number;
    desiredModelArn?: string;
    endpointArn: string;
    flywheelArn?: string;
}

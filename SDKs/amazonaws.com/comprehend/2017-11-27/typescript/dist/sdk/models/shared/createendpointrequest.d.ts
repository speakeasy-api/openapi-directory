import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateEndpointRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    dataAccessRoleArn?: string;
    desiredInferenceUnits: number;
    endpointName: string;
    flywheelArn?: string;
    modelArn?: string;
    tags?: Tag[];
}

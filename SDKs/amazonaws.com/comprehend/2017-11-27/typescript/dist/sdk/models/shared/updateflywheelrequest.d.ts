import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateDataSecurityConfig } from "./updatedatasecurityconfig";
export declare class UpdateFlywheelRequest extends SpeakeasyBase {
    activeModelArn?: string;
    dataAccessRoleArn?: string;
    dataSecurityConfig?: UpdateDataSecurityConfig;
    flywheelArn: string;
}

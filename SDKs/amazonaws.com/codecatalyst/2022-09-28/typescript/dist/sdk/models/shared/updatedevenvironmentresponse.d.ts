import { SpeakeasyBase } from "../../../internal/utils";
import { IdeConfiguration } from "./ideconfiguration";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * Success
 */
export declare class UpdateDevEnvironmentResponse extends SpeakeasyBase {
    alias?: string;
    clientToken?: string;
    id: string;
    ides?: IdeConfiguration[];
    inactivityTimeoutMinutes?: number;
    instanceType?: InstanceTypeEnum;
    projectName: string;
    spaceName: string;
}

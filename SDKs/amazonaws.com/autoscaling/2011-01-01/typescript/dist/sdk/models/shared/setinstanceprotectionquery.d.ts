import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetInstanceProtectionQuery extends SpeakeasyBase {
    autoScalingGroupName: string;
    instanceIds: string[];
    protectedFromScaleIn: boolean;
}

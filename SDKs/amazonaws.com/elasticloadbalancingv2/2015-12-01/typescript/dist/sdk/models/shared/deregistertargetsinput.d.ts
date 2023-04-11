import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDescription } from "./targetdescription";
export declare class DeregisterTargetsInput extends SpeakeasyBase {
    targetGroupArn: string;
    targets: TargetDescription[];
}

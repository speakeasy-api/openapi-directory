import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDescription } from "./targetdescription";
export declare class RegisterTargetsInput extends SpeakeasyBase {
    targetGroupArn: string;
    targets: TargetDescription[];
}

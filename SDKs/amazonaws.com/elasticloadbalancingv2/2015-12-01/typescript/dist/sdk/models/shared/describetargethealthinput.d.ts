import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDescription } from "./targetdescription";
export declare class DescribeTargetHealthInput extends SpeakeasyBase {
    targetGroupArn: string;
    targets?: TargetDescription[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { VpcAttributeNameEnum } from "./vpcattributenameenum";
export declare class DescribeVpcAttributeRequest extends SpeakeasyBase {
    attribute: VpcAttributeNameEnum;
    dryRun?: boolean;
    vpcId: string;
}

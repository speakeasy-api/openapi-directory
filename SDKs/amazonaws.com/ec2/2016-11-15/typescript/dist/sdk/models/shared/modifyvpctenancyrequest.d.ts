import { SpeakeasyBase } from "../../../internal/utils";
import { VpcTenancyEnum } from "./vpctenancyenum";
export declare class ModifyVpcTenancyRequest extends SpeakeasyBase {
    dryRun?: boolean;
    instanceTenancy: VpcTenancyEnum;
    vpcId: string;
}

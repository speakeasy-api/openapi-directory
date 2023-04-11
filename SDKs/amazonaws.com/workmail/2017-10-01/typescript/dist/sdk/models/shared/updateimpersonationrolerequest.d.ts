import { SpeakeasyBase } from "../../../internal/utils";
import { ImpersonationRoleTypeEnum } from "./impersonationroletypeenum";
import { ImpersonationRule } from "./impersonationrule";
export declare class UpdateImpersonationRoleRequest extends SpeakeasyBase {
    description?: string;
    impersonationRoleId: string;
    name: string;
    organizationId: string;
    rules: ImpersonationRule[];
    type: ImpersonationRoleTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImpersonationRoleTypeEnum } from "./impersonationroletypeenum";
import { ImpersonationRule } from "./impersonationrule";
export declare class CreateImpersonationRoleRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    organizationId: string;
    rules: ImpersonationRule[];
    type: ImpersonationRoleTypeEnum;
}

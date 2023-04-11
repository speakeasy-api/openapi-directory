import { SpeakeasyBase } from "../../../internal/utils";
import { ImpersonationRoleTypeEnum } from "./impersonationroletypeenum";
import { ImpersonationRule } from "./impersonationrule";
/**
 * Success
 */
export declare class GetImpersonationRoleResponse extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    impersonationRoleId?: string;
    name?: string;
    rules?: ImpersonationRule[];
    type?: ImpersonationRoleTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ImpersonationRoleTypeEnum } from "./impersonationroletypeenum";
/**
 * An impersonation role for the given WorkMail organization.
 */
export declare class ImpersonationRole extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    impersonationRoleId?: string;
    name?: string;
    type?: ImpersonationRoleTypeEnum;
}

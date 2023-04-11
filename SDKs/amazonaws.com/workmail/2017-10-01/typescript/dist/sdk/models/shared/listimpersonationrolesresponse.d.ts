import { SpeakeasyBase } from "../../../internal/utils";
import { ImpersonationRole } from "./impersonationrole";
/**
 * Success
 */
export declare class ListImpersonationRolesResponse extends SpeakeasyBase {
    nextToken?: string;
    roles?: ImpersonationRole[];
}

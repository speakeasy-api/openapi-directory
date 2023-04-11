import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";
/**
 * Success
 */
export declare class RegisterSlackWorkspaceForOrganizationResult extends SpeakeasyBase {
    accountType?: AccountTypeEnum;
    teamId?: string;
    teamName?: string;
}

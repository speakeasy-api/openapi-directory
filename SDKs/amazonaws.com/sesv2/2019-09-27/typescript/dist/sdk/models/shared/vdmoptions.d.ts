import { SpeakeasyBase } from "../../../internal/utils";
import { DashboardOptions } from "./dashboardoptions";
import { GuardianOptions } from "./guardianoptions";
/**
 * An object that defines the VDM settings that apply to emails that you send using the configuration set.
 */
export declare class VdmOptions extends SpeakeasyBase {
    dashboardOptions?: DashboardOptions;
    guardianOptions?: GuardianOptions;
}

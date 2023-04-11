import { SpeakeasyBase } from "../../../internal/utils";
import { AwsManagedResources } from "./awsmanagedresources";
import { NoManagementPreference } from "./nomanagementpreference";
import { SelfManageResources } from "./selfmanageresources";
/**
 *  Preferences for migrating an application to AWS.
 */
export declare class ManagementPreference extends SpeakeasyBase {
    awsManagedResources?: AwsManagedResources;
    noPreference?: NoManagementPreference;
    selfManageResources?: SelfManageResources;
}

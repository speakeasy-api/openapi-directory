import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetHookResourceTargetDetails } from "./changesethookresourcetargetdetails";
import { HookTargetTypeEnum } from "./hooktargettypeenum";
/**
 * Specifies target details for an activated hook.
 */
export declare class ChangeSetHookTargetDetails extends SpeakeasyBase {
    resourceTargetDetails?: ChangeSetHookResourceTargetDetails;
    targetType?: HookTargetTypeEnum;
}

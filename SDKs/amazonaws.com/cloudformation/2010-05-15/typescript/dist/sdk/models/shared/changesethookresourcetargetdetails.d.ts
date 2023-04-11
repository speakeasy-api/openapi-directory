import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeActionEnum } from "./changeactionenum";
/**
 * Specifies <code>RESOURCE</code> type target details for activated hooks.
 */
export declare class ChangeSetHookResourceTargetDetails extends SpeakeasyBase {
    logicalResourceId?: string;
    resourceAction?: ChangeActionEnum;
    resourceType?: string;
}

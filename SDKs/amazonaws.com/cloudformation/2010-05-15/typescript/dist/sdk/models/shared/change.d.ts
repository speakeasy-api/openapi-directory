import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";
import { ResourceChange } from "./resourcechange";
/**
 * The <code>Change</code> structure describes the changes CloudFormation will perform if you execute the change set.
 */
export declare class Change extends SpeakeasyBase {
    hookInvocationCount?: number;
    resourceChange?: ResourceChange;
    type?: ChangeTypeEnum;
}

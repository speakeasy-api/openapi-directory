import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsStatusEnum } from "./standardsstatusenum";
import { StandardsStatusReason } from "./standardsstatusreason";
/**
 * A resource that represents your subscription to a supported standard.
 */
export declare class StandardsSubscription extends SpeakeasyBase {
    standardsArn: string;
    standardsInput: Record<string, string>;
    standardsStatus: StandardsStatusEnum;
    standardsStatusReason?: StandardsStatusReason;
    standardsSubscriptionArn: string;
}

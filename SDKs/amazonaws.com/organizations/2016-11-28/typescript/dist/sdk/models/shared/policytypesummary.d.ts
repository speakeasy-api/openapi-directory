import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeEnum } from "./policytypeenum";
import { PolicyTypeStatusEnum } from "./policytypestatusenum";
/**
 * Contains information about a policy type and its status in the associated root.
 */
export declare class PolicyTypeSummary extends SpeakeasyBase {
    status?: PolicyTypeStatusEnum;
    type?: PolicyTypeEnum;
}

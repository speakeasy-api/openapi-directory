import { SpeakeasyBase } from "../../../internal/utils";
import { FreeTrialStatusEnum } from "./freetrialstatusenum";
import { FreeTrialTypeEnum } from "./freetrialtypeenum";
/**
 * An object that contains information about the Amazon Inspector free trial for an account.
 */
export declare class FreeTrialInfo extends SpeakeasyBase {
    end: Date;
    start: Date;
    status: FreeTrialStatusEnum;
    type: FreeTrialTypeEnum;
}

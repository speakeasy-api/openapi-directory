import { SpeakeasyBase } from "../../../internal/utils";
import { UnlockDelayUnitEnum } from "./unlockdelayunitenum";
/**
 * Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay.
 */
export declare class UnlockDelay extends SpeakeasyBase {
    unlockDelayUnit: UnlockDelayUnitEnum;
    unlockDelayValue: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionExpiryEnum } from "./interactionexpiryenum";
import { InteractionGroupEnum } from "./interactiongroupenum";
/**
 * Limit interactions to a specific type of user for a specified duration
 */
export declare class InteractionLimit extends SpeakeasyBase {
    /**
     * The duration of the interaction restriction. Default: `one_day`.
     */
    expiry?: InteractionExpiryEnum;
    /**
     * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
     */
    limit: InteractionGroupEnum;
}

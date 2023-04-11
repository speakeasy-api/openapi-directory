import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionGroupEnum } from "./interactiongroupenum";
/**
 * Interaction limit settings.
 */
export declare class InteractionLimitResponse extends SpeakeasyBase {
    expiresAt: Date;
    /**
     * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
     */
    limit: InteractionGroupEnum;
    origin: string;
}

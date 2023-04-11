import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lens return object.
 */
export declare class Lens extends SpeakeasyBase {
    /**
     * The description of the lens.
     */
    description?: string;
    lensArn?: string;
    lensVersion?: string;
    /**
     * The full name of the lens.
     */
    name?: string;
    owner?: string;
    shareInvitationId?: string;
    tags?: Record<string, string>;
}

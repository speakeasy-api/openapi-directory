import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options to fork the score
 */
export declare class ScoreFork extends SpeakeasyBase {
    /**
     * Unique identifier of a collection where the score will be copied.
     *
     * @remarks
     * If no collection identifier is provided, the score will be stored in the `root` directory.
     *
     */
    collection?: string;
}

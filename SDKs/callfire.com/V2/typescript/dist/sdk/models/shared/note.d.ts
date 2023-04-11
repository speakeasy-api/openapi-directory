import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a note which can be added to a call
 */
export declare class Note extends SpeakeasyBase {
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    created?: number;
    /**
     * A text of a note
     */
    text?: string;
}

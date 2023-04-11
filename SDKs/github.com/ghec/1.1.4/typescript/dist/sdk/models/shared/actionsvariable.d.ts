import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class ActionsVariable extends SpeakeasyBase {
    /**
     * The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    createdAt: Date;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updatedAt: Date;
    /**
     * The value of the variable.
     */
    value: string;
}

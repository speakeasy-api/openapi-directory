import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tag
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * Tag ID.
     */
    dollarId: string;
    /**
     * The entrypoint command in use to execute the tag code.
     */
    command: string;
    /**
     * The tag creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * Function ID.
     */
    functionId: string;
    /**
     * The code size in bytes.
     */
    size: string;
}

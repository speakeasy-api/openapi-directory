import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorsEntity extends SpeakeasyBase {
    /**
     * A list of fields where errors occur
     */
    fields?: string[];
    /**
     * A list of error messages
     */
    messages?: string[];
}

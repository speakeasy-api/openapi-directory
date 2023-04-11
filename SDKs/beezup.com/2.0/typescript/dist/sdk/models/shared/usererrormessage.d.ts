import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserErrorMessage extends SpeakeasyBase {
    /**
     * a dictionary string/object
     */
    arguments?: Record<string, Record<string, any>>;
    /**
     * Error Code
     */
    code: string;
    /**
     * If the error is translated, the culture name will be indicated
     */
    cultureName?: string;
    /**
     * The documentation related to this operation.
     */
    docUrl?: string;
    /**
     * The error message
     */
    message: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class BeezUPCommonUserErrorMessageArguments extends SpeakeasyBase {
    /**
     * The key of the parameter
     */
    name: string;
    /**
     * The value of the parameter. Depending to the type.
     */
    value: Record<string, any>;
}
export declare class BeezUPCommonUserErrorMessage extends SpeakeasyBase {
    /**
     * a dictionary string/object
     */
    arguments?: BeezUPCommonUserErrorMessageArguments[];
    /**
     * the error code. The error code can be a pattern containing the argument's name
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

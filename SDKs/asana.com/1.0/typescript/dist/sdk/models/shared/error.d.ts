import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Additional information directing developers to resources on how to address and fix the problem, if available.
     */
    help?: string;
    /**
     * Message providing more detail about the error that occurred, if available.
     */
    message?: string;
    /**
     * *500 errors only*. A unique error phrase which can be used when contacting developer support to help identify the exact occurrence of the problem in Asana’s logs.
     */
    phrase?: string;
}

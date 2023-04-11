import { SpeakeasyBase } from "../../../internal/utils";
/**
 * See the [errors page](errors/) for more detail on what kind of errors you can get.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * More information about why the error occurred.
     */
    detail?: string;
    /**
     * The HTTP status code
     */
    status: number;
    /**
     * A short description of the type
     */
    title: string;
    /**
     * A URL to one of the [error types](errors/).
     */
    type: string;
}

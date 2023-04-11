import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorT extends SpeakeasyBase {
    /**
     * An error message
     */
    message?: string;
    /**
     * An HTTP status code
     */
    status?: number;
    /**
     * A UTC ISO timestamp
     */
    timestamp?: Date;
}

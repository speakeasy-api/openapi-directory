import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad Request : used to indicate that incorrect parameters were passed to the request.
 */
export declare class ProblemDetails extends SpeakeasyBase {
    /**
     * A human-readable explanation specific to this occurrence of the problem
     */
    detail?: string;
    /**
     * A URI reference that identifies the specific occurrence of the problem
     */
    instance?: string;
    /**
     * The HTTP status code for this occurrence of the problem
     */
    status?: number;
    /**
     * A short, human-readable summary of the problem type
     */
    title?: string;
    /**
     * A URI reference according to IETF RFC 3986 that identifies the problem type
     */
    type?: string;
}

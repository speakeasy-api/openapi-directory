import { SpeakeasyBase } from "../../../internal/utils";
/**
 * an object containing references to the source of the error
 */
export declare class IssueIssueSource extends SpeakeasyBase {
    /**
     * a string indicating an example of the right value
     */
    example?: string;
    /**
     * a string indicating which URI query parameter caused the issue
     */
    parameter?: string;
    /**
     * a JSON Pointer [RFC6901] to the associated entity in the request document
     */
    pointer?: string;
}
export declare class Issue extends SpeakeasyBase {
    /**
     * an application-specific error code
     */
    code?: number;
    /**
     * explanation of the error
     */
    detail?: string;
    /**
     * an object containing references to the source of the error
     */
    source?: IssueIssueSource;
    /**
     * the HTTP status code applicable to this error
     */
    status?: number;
    /**
     * a short summary of the error
     */
    title?: string;
}

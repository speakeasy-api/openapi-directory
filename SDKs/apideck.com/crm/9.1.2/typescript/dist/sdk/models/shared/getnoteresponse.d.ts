import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * Note
 */
export declare class GetNoteResponse extends SpeakeasyBase {
    data: Note;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}

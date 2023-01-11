import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a document that matches the search request.
**/
export declare class Hit extends SpeakeasyBase {
    exprs?: Record<string, string>;
    fields?: Record<string, string[]>;
    highlights?: Record<string, string>;
    id?: string;
}

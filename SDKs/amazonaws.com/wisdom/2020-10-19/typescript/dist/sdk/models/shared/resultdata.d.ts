import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * Information about the result.
 */
export declare class ResultData extends SpeakeasyBase {
    document: Document;
    relevanceScore?: number;
    resultId: string;
}

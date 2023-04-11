import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSet } from "./resultset";
/**
 * Success
 */
export declare class GetScreenDataResult extends SpeakeasyBase {
    nextToken?: string;
    results: Record<string, ResultSet>;
    workbookCursor: number;
}

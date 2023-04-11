import { SpeakeasyBase } from "../../../internal/utils";
import { Statement } from "./statement";
/**
 * Success
 */
export declare class ListStatementsResponse extends SpeakeasyBase {
    nextToken?: string;
    statements?: Statement[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Receipt } from "./receipt";
/**
 * Success
 */
export declare class ListPageReceiptsResult extends SpeakeasyBase {
    nextToken?: string;
    receipts?: Receipt[];
}

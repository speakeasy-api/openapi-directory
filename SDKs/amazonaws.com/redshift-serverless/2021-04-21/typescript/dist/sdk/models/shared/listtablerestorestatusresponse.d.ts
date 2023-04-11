import { SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatus } from "./tablerestorestatus";
/**
 * Success
 */
export declare class ListTableRestoreStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    tableRestoreStatuses?: TableRestoreStatus[];
}

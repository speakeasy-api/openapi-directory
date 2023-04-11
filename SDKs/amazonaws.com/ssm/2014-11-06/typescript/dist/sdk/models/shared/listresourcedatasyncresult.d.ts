import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncItem } from "./resourcedatasyncitem";
/**
 * Success
 */
export declare class ListResourceDataSyncResult extends SpeakeasyBase {
    nextToken?: string;
    resourceDataSyncItems?: ResourceDataSyncItem[];
}

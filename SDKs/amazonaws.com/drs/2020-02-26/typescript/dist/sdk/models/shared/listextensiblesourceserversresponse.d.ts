import { SpeakeasyBase } from "../../../internal/utils";
import { StagingSourceServer } from "./stagingsourceserver";
/**
 * Success
 */
export declare class ListExtensibleSourceServersResponse extends SpeakeasyBase {
    items?: StagingSourceServer[];
    nextToken?: string;
}

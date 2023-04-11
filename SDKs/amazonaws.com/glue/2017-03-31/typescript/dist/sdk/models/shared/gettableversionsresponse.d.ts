import { SpeakeasyBase } from "../../../internal/utils";
import { TableVersion } from "./tableversion";
/**
 * Success
 */
export declare class GetTableVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    tableVersions?: TableVersion[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { VersionInformation } from "./versioninformation";
/**
 * Success
 */
export declare class ListCoreDefinitionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}

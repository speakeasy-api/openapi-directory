import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersionsSummary } from "./engineversionssummary";
/**
 * Success
 */
export declare class ListEngineVersionsResponse extends SpeakeasyBase {
    engineVersions: EngineVersionsSummary[];
    nextToken?: string;
}

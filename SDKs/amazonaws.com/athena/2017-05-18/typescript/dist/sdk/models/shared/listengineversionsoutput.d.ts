import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
/**
 * Success
 */
export declare class ListEngineVersionsOutput extends SpeakeasyBase {
    engineVersions?: EngineVersion[];
    nextToken?: string;
}

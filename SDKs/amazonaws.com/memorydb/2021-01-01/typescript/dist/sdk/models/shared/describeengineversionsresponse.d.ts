import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersionInfo } from "./engineversioninfo";
/**
 * Success
 */
export declare class DescribeEngineVersionsResponse extends SpeakeasyBase {
    engineVersions?: EngineVersionInfo[];
    nextToken?: string;
}

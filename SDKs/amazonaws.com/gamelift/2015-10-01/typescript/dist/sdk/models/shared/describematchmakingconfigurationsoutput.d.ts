import { SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";
/**
 * Success
 */
export declare class DescribeMatchmakingConfigurationsOutput extends SpeakeasyBase {
    configurations?: MatchmakingConfiguration[];
    nextToken?: string;
}

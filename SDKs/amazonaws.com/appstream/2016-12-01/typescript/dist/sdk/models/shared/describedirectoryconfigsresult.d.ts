import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfig } from "./directoryconfig";
/**
 * Success
 */
export declare class DescribeDirectoryConfigsResult extends SpeakeasyBase {
    directoryConfigs?: DirectoryConfig[];
    nextToken?: string;
}

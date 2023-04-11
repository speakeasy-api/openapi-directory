import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersion } from "./runtimeversion";
/**
 * Success
 */
export declare class DescribeRuntimeVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    runtimeVersions?: RuntimeVersion[];
}

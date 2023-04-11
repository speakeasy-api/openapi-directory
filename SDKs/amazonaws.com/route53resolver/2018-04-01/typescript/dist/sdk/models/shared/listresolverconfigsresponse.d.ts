import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverConfig } from "./resolverconfig";
/**
 * Success
 */
export declare class ListResolverConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    resolverConfigs?: ResolverConfig[];
}

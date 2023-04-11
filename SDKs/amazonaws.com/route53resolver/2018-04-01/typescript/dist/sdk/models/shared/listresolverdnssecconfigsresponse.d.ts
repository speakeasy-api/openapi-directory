import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverDnssecConfig } from "./resolverdnssecconfig";
/**
 * Success
 */
export declare class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    resolverDnssecConfigs?: ResolverDnssecConfig[];
}

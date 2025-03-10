import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpoint } from "./resolverendpoint";
/**
 * Success
 */
export declare class ListResolverEndpointsResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverEndpoints?: ResolverEndpoint[];
}

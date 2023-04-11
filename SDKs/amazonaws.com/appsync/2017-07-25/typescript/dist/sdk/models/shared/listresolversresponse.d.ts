import { SpeakeasyBase } from "../../../internal/utils";
import { Resolver } from "./resolver";
/**
 * Success
 */
export declare class ListResolversResponse extends SpeakeasyBase {
    nextToken?: string;
    resolvers?: Resolver[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategy } from "./routingstrategy";
export declare class UpdateAliasInput extends SpeakeasyBase {
    aliasId: string;
    description?: string;
    name?: string;
    routingStrategy?: RoutingStrategy;
}

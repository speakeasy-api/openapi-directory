import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingStrategyTypeEnum } from "./routingstrategytypeenum";
export declare class ListAliasesInput extends SpeakeasyBase {
    limit?: number;
    name?: string;
    nextToken?: string;
    routingStrategyType?: RoutingStrategyTypeEnum;
}

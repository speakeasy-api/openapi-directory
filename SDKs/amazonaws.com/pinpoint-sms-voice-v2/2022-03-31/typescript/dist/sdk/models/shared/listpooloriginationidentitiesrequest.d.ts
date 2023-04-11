import { SpeakeasyBase } from "../../../internal/utils";
import { PoolOriginationIdentitiesFilter } from "./pooloriginationidentitiesfilter";
export declare class ListPoolOriginationIdentitiesRequest extends SpeakeasyBase {
    filters?: PoolOriginationIdentitiesFilter[];
    maxResults?: number;
    nextToken?: string;
    poolId: string;
}

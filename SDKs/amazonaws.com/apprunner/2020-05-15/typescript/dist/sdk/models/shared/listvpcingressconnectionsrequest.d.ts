import { SpeakeasyBase } from "../../../internal/utils";
import { ListVpcIngressConnectionsFilter } from "./listvpcingressconnectionsfilter";
export declare class ListVpcIngressConnectionsRequest extends SpeakeasyBase {
    filter?: ListVpcIngressConnectionsFilter;
    maxResults?: number;
    nextToken?: string;
}

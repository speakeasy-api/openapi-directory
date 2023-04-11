import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipDatasources } from "./membershipdatasources";
import { UnprocessedGraph } from "./unprocessedgraph";
/**
 * Success
 */
export declare class BatchGetMembershipDatasourcesResponse extends SpeakeasyBase {
    membershipDatasources?: MembershipDatasources[];
    unprocessedGraphs?: UnprocessedGraph[];
}

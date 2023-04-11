import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionSummary } from "./environmentaccountconnectionsummary";
/**
 * Success
 */
export declare class ListEnvironmentAccountConnectionsOutput extends SpeakeasyBase {
    environmentAccountConnections: EnvironmentAccountConnectionSummary[];
    nextToken?: string;
}

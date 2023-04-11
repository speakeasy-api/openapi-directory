import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request parameters to get cluster credentials.
 */
export declare class GetClusterCredentialsMessage extends SpeakeasyBase {
    autoCreate?: boolean;
    clusterIdentifier: string;
    dbGroups?: string[];
    dbName?: string;
    dbUser: string;
    durationSeconds?: number;
}

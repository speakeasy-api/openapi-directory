import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCompleteMigrationActionEnum {
    CompleteMigration = "CompleteMigration"
}
export declare enum GETCompleteMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETCompleteMigrationRequest extends SpeakeasyBase {
    action: GETCompleteMigrationActionEnum;
    /**
     * Forces the migration to stop without ensuring that data is in sync. It is recommended to use this option only to abort the migration and not recommended when application wants to continue migration to ElastiCache.
     */
    force?: boolean;
    /**
     * The ID of the replication group to which data is being migrated.
     */
    replicationGroupId: string;
    version: GETCompleteMigrationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCompleteMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

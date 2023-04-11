import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
import { ServerSideEncryptionUpdateDetails } from "./serversideencryptionupdatedetails";
import { WatchlistDetails } from "./watchlistdetails";
/**
 * Contains a summary of information about a domain.
 */
export declare class DomainSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    description?: string;
    domainId?: string;
    domainStatus?: DomainStatusEnum;
    name?: string;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    serverSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
    updatedAt?: Date;
    watchlistDetails?: WatchlistDetails;
}

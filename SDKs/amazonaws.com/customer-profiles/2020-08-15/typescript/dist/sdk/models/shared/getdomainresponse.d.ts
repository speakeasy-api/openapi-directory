import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStats } from "./domainstats";
import { MatchingResponse } from "./matchingresponse";
/**
 * Success
 */
export declare class GetDomainResponse extends SpeakeasyBase {
    createdAt: Date;
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays?: number;
    domainName: string;
    lastUpdatedAt: Date;
    matching?: MatchingResponse;
    stats?: DomainStats;
    tags?: Record<string, string>;
}

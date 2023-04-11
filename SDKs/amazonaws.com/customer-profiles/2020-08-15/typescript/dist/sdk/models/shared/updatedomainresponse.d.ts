import { SpeakeasyBase } from "../../../internal/utils";
import { MatchingResponse } from "./matchingresponse";
/**
 * Success
 */
export declare class UpdateDomainResponse extends SpeakeasyBase {
    createdAt: Date;
    deadLetterQueueUrl?: string;
    defaultEncryptionKey?: string;
    defaultExpirationDays?: number;
    domainName: string;
    lastUpdatedAt: Date;
    matching?: MatchingResponse;
    tags?: Record<string, string>;
}

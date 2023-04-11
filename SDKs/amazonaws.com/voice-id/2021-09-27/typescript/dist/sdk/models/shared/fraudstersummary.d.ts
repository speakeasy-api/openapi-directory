import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a summary of information about a fraudster.
 */
export declare class FraudsterSummary extends SpeakeasyBase {
    createdAt?: Date;
    domainId?: string;
    generatedFraudsterId?: string;
    watchlistIds?: string[];
}

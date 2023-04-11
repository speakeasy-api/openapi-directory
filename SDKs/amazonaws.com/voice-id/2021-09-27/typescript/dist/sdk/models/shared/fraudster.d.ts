import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains all the information about a fraudster.
 */
export declare class Fraudster extends SpeakeasyBase {
    createdAt?: Date;
    domainId?: string;
    generatedFraudsterId?: string;
    watchlistIds?: string[];
}

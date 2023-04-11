import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the target configuration.
 */
export declare class AcceptReservedInstancesExchangeQuoteRequestTargetConfigurations extends SpeakeasyBase {
    instanceCount?: number;
    offeringId: string;
}
/**
 * Contains the parameters for accepting the quote.
 */
export declare class AcceptReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    dryRun?: boolean;
    reservedInstanceIds: string[];
    targetConfigurations?: AcceptReservedInstancesExchangeQuoteRequestTargetConfigurations[];
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the target configuration.
 */
export declare class GetReservedInstancesExchangeQuoteRequestTargetConfigurations extends SpeakeasyBase {
    instanceCount?: number;
    offeringId: string;
}
/**
 * Contains the parameters for GetReservedInstanceExchangeQuote.
 */
export declare class GetReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    dryRun?: boolean;
    reservedInstanceIds: string[];
    targetConfigurations?: GetReservedInstancesExchangeQuoteRequestTargetConfigurations[];
}

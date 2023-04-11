import { SpeakeasyBase } from "../../../internal/utils";
import { ConfiguredTableAssociationSummary } from "./configuredtableassociationsummary";
/**
 * Success
 */
export declare class ListConfiguredTableAssociationsOutput extends SpeakeasyBase {
    configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[];
    nextToken?: string;
}

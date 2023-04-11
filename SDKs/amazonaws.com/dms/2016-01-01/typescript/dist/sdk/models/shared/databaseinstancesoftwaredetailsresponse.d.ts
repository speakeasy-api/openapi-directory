import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an inventory database instance for a Fleet Advisor collector.
 */
export declare class DatabaseInstanceSoftwareDetailsResponse extends SpeakeasyBase {
    engine?: string;
    engineEdition?: string;
    engineVersion?: string;
    osArchitecture?: number;
    servicePack?: string;
    supportLevel?: string;
    tooltip?: string;
}

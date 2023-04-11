import { SpeakeasyBase } from "../../../internal/utils";
import { RdsConfiguration } from "./rdsconfiguration";
import { RdsRequirements } from "./rdsrequirements";
/**
 * Provides information that describes a recommendation of a target engine on Amazon RDS.
 */
export declare class RdsRecommendation extends SpeakeasyBase {
    requirementsToTarget?: RdsRequirements;
    targetConfiguration?: RdsConfiguration;
}

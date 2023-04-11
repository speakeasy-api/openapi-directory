import { SpeakeasyBase } from "../../../internal/utils";
import { AutomatedDiscoveryStatusEnum } from "./automateddiscoverystatusenum";
/**
 * Success
 */
export declare class GetAutomatedDiscoveryConfigurationResponse extends SpeakeasyBase {
    classificationScopeId?: string;
    disabledAt?: Date;
    firstEnabledAt?: Date;
    lastUpdatedAt?: Date;
    sensitivityInspectionTemplateId?: string;
    status?: AutomatedDiscoveryStatusEnum;
}

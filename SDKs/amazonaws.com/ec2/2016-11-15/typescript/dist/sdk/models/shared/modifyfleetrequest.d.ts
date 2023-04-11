import { SpeakeasyBase } from "../../../internal/utils";
import { FleetExcessCapacityTerminationPolicyEnum } from "./fleetexcesscapacityterminationpolicyenum";
import { FleetLaunchTemplateOverridesListRequest } from "./fleetlaunchtemplateoverrideslistrequest";
import { FleetLaunchTemplateSpecificationRequest } from "./fleetlaunchtemplatespecificationrequest";
import { TargetCapacitySpecificationRequest } from "./targetcapacityspecificationrequest";
/**
 * Describes a launch template and overrides.
 */
export declare class ModifyFleetRequestLaunchTemplateConfigs extends SpeakeasyBase {
    launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    overrides?: FleetLaunchTemplateOverridesListRequest[];
}
export declare class ModifyFleetRequest extends SpeakeasyBase {
    context?: string;
    dryRun?: boolean;
    excessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicyEnum;
    fleetId: string;
    launchTemplateConfigs?: ModifyFleetRequestLaunchTemplateConfigs[];
    targetCapacitySpecification?: TargetCapacitySpecificationRequest;
}

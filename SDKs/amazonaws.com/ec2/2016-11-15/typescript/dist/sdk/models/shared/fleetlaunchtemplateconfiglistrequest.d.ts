import { SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateOverridesListRequest } from "./fleetlaunchtemplateoverrideslistrequest";
import { FleetLaunchTemplateSpecificationRequest } from "./fleetlaunchtemplatespecificationrequest";
/**
 * Describes a launch template and overrides.
 */
export declare class FleetLaunchTemplateConfigListRequest extends SpeakeasyBase {
    launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    overrides?: FleetLaunchTemplateOverridesListRequest[];
}

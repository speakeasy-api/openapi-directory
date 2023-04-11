import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateOverrides } from "./launchtemplateoverrides";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
/**
 * Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy.
 */
export declare class LaunchTemplate extends SpeakeasyBase {
    launchTemplateSpecification?: LaunchTemplateSpecification;
    overrides?: LaunchTemplateOverrides[];
}

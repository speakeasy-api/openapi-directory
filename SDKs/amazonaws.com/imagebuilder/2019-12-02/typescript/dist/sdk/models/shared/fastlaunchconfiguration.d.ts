import { SpeakeasyBase } from "../../../internal/utils";
import { FastLaunchLaunchTemplateSpecification } from "./fastlaunchlaunchtemplatespecification";
import { FastLaunchSnapshotConfiguration } from "./fastlaunchsnapshotconfiguration";
/**
 * Define and configure faster launching for output Windows AMIs.
 */
export declare class FastLaunchConfiguration extends SpeakeasyBase {
    accountId?: string;
    enabled: boolean;
    launchTemplate?: FastLaunchLaunchTemplateSpecification;
    maxParallelLaunches?: number;
    snapshotConfiguration?: FastLaunchSnapshotConfiguration;
}

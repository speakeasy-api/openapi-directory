import { SpeakeasyBase } from "../../../internal/utils";
import { FastLaunchLaunchTemplateSpecificationRequest } from "./fastlaunchlaunchtemplatespecificationrequest";
import { FastLaunchSnapshotConfigurationRequest } from "./fastlaunchsnapshotconfigurationrequest";
export declare class EnableFastLaunchRequest extends SpeakeasyBase {
    dryRun?: boolean;
    imageId: string;
    launchTemplate?: FastLaunchLaunchTemplateSpecificationRequest;
    maxParallelLaunches?: number;
    resourceType?: string;
    snapshotConfiguration?: FastLaunchSnapshotConfigurationRequest;
}

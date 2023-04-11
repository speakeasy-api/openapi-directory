import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { Recipes } from "./recipes";
import { VolumeConfiguration } from "./volumeconfiguration";
export declare class UpdateLayerRequest extends SpeakeasyBase {
    attributes?: Record<string, string>;
    autoAssignElasticIps?: boolean;
    autoAssignPublicIps?: boolean;
    cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    customInstanceProfileArn?: string;
    customJson?: string;
    customRecipes?: Recipes;
    customSecurityGroupIds?: string[];
    enableAutoHealing?: boolean;
    installUpdatesOnBoot?: boolean;
    layerId: string;
    lifecycleEventConfiguration?: LifecycleEventConfiguration;
    name?: string;
    packages?: string[];
    shortname?: string;
    useEbsOptimizedInstances?: boolean;
    volumeConfigurations?: VolumeConfiguration[];
}

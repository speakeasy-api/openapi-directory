import { SpeakeasyBase } from "../../../internal/utils";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerGroupAutoScalingPolicy } from "./gameservergroupautoscalingpolicy";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { Tag } from "./tag";
export declare class CreateGameServerGroupInput extends SpeakeasyBase {
    autoScalingPolicy?: GameServerGroupAutoScalingPolicy;
    balancingStrategy?: BalancingStrategyEnum;
    gameServerGroupName: string;
    gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;
    instanceDefinitions: InstanceDefinition[];
    launchTemplate: LaunchTemplateSpecification;
    maxSize: number;
    minSize: number;
    roleArn: string;
    tags?: Tag[];
    vpcSubnets?: string[];
}

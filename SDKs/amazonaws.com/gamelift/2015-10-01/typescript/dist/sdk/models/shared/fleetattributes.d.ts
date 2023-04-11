import { SpeakeasyBase } from "../../../internal/utils";
import { AnywhereConfiguration } from "./anywhereconfiguration";
import { CertificateConfiguration } from "./certificateconfiguration";
import { ComputeTypeEnum } from "./computetypeenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { FleetActionEnum } from "./fleetactionenum";
import { FleetStatusEnum } from "./fleetstatusenum";
import { FleetTypeEnum } from "./fleettypeenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
/**
 * <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p>
 */
export declare class FleetAttributes extends SpeakeasyBase {
    /**
     * GameLift Anywhere configuration options for your Anywhere fleets.
     */
    anywhereConfiguration?: AnywhereConfiguration;
    buildArn?: string;
    buildId?: string;
    /**
     * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>.
     */
    certificateConfiguration?: CertificateConfiguration;
    computeType?: ComputeTypeEnum;
    creationTime?: Date;
    description?: string;
    fleetArn?: string;
    fleetId?: string;
    fleetType?: FleetTypeEnum;
    instanceRoleArn?: string;
    instanceType?: Ec2InstanceTypeEnum;
    logPaths?: string[];
    metricGroups?: string[];
    name?: string;
    newGameSessionProtectionPolicy?: ProtectionPolicyEnum;
    operatingSystem?: OperatingSystemEnum;
    /**
     * <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p>
     */
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    scriptArn?: string;
    scriptId?: string;
    serverLaunchParameters?: string;
    serverLaunchPath?: string;
    status?: FleetStatusEnum;
    stoppedActions?: FleetActionEnum[];
    terminationTime?: Date;
}

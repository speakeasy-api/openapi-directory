import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeCapacityStatus } from "./computecapacitystatus";
import { DomainJoinInfo } from "./domainjoininfo";
import { FleetError } from "./fleeterror";
import { FleetStateEnum } from "./fleetstateenum";
import { FleetTypeEnum } from "./fleettypeenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { S3Location } from "./s3location";
import { StreamViewEnum } from "./streamviewenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Describes a fleet.
 */
export declare class Fleet extends SpeakeasyBase {
    arn: string;
    computeCapacityStatus: ComputeCapacityStatus;
    createdTime?: Date;
    description?: string;
    disconnectTimeoutInSeconds?: number;
    displayName?: string;
    domainJoinInfo?: DomainJoinInfo;
    enableDefaultInternetAccess?: boolean;
    fleetErrors?: FleetError[];
    fleetType?: FleetTypeEnum;
    iamRoleArn?: string;
    idleDisconnectTimeoutInSeconds?: number;
    imageArn?: string;
    imageName?: string;
    instanceType: string;
    maxConcurrentSessions?: number;
    maxUserDurationInSeconds?: number;
    name: string;
    platform?: PlatformTypeEnum;
    sessionScriptS3Location?: S3Location;
    state: FleetStateEnum;
    streamView?: StreamViewEnum;
    usbDeviceFilterStrings?: string[];
    vpcConfig?: VpcConfig;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeStatusEnum } from "./computestatusenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
/**
 * Resources used to host your game servers. A compute resource can be managed GameLift Amazon EC2 instances or your own resources.
 */
export declare class Compute extends SpeakeasyBase {
    computeArn?: string;
    computeName?: string;
    computeStatus?: ComputeStatusEnum;
    creationTime?: Date;
    dnsName?: string;
    fleetArn?: string;
    fleetId?: string;
    gameLiftServiceSDKEndpoint?: string;
    ipAddress?: string;
    location?: string;
    operatingSystem?: OperatingSystemEnum;
    type?: Ec2InstanceTypeEnum;
}

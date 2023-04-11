import { SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { Counters } from "./counters";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { DeviceMinutes } from "./deviceminutes";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { DeviceSelectionResult } from "./deviceselectionresult";
import { ExecutionResultCodeEnum } from "./executionresultcodeenum";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { Location } from "./location";
import { NetworkProfile } from "./networkprofile";
import { Radios } from "./radios";
import { TestTypeEnum } from "./testtypeenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Represents a test run on a set of devices with a given app package, test parameters, and so on.
 */
export declare class Run extends SpeakeasyBase {
    appUpload?: string;
    arn?: string;
    billingMethod?: BillingMethodEnum;
    completedJobs?: number;
    counters?: Counters;
    created?: Date;
    customerArtifactPaths?: CustomerArtifactPaths;
    deviceMinutes?: DeviceMinutes;
    devicePoolArn?: string;
    deviceSelectionResult?: DeviceSelectionResult;
    eventCount?: number;
    jobTimeoutMinutes?: number;
    locale?: string;
    location?: Location;
    message?: string;
    name?: string;
    networkProfile?: NetworkProfile;
    parsingResultUrl?: string;
    platform?: DevicePlatformEnum;
    radios?: Radios;
    result?: ExecutionResultEnum;
    resultCode?: ExecutionResultCodeEnum;
    seed?: number;
    skipAppResign?: boolean;
    started?: Date;
    status?: ExecutionStatusEnum;
    stopped?: Date;
    testSpecArn?: string;
    totalJobs?: number;
    type?: TestTypeEnum;
    vpcConfig?: VpcConfig;
    webUrl?: string;
}

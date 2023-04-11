import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileStateEnum } from "./launchprofilestateenum";
import { LaunchProfileStatusCodeEnum } from "./launchprofilestatuscodeenum";
import { StreamConfiguration } from "./streamconfiguration";
import { ValidationResult } from "./validationresult";
/**
 * <p>A launch profile controls your artist workforce’s access to studio components, like compute farms, shared file systems, managed file systems, and license server configurations, as well as instance types and Amazon Machine Images (AMIs). </p> <p>Studio administrators create launch profiles in the Nimble Studio console. Artists can use their launch profiles to launch an instance from the Nimble Studio portal. Each user’s launch profile defines how they can launch a streaming session. By default, studio admins can use all launch profiles.</p>
 */
export declare class LaunchProfile extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    ec2SubnetIds?: string[];
    launchProfileId?: string;
    launchProfileProtocolVersions?: string[];
    name?: string;
    state?: LaunchProfileStateEnum;
    statusCode?: LaunchProfileStatusCodeEnum;
    statusMessage?: string;
    streamConfiguration?: StreamConfiguration;
    studioComponentIds?: string[];
    tags?: Record<string, string>;
    updatedAt?: Date;
    updatedBy?: string;
    validationResults?: ValidationResult[];
}

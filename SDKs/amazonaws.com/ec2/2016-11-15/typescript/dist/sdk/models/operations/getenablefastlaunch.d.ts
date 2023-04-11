import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableFastLaunchActionEnum {
    EnableFastLaunch = "EnableFastLaunch"
}
/**
 * <p>Request to create a launch template for a fast-launch enabled Windows AMI.</p> <note> <p>Note - You can specify either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p> </note>
 */
export declare class GETEnableFastLaunchLaunchTemplate extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version: string;
}
/**
 * Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.
 */
export declare class GETEnableFastLaunchSnapshotConfiguration extends SpeakeasyBase {
    targetResourceCount?: number;
}
export declare enum GETEnableFastLaunchVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableFastLaunchRequest extends SpeakeasyBase {
    action: GETEnableFastLaunchActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the image for which you’re enabling faster launching.
     */
    imageId: string;
    /**
     * The launch template to use when launching Windows instances from pre-provisioned snapshots. Launch template parameters can include either the name or ID of the launch template, but not both.
     */
    launchTemplate?: GETEnableFastLaunchLaunchTemplate;
    /**
     * The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows faster launching. Value must be <code>6</code> or greater.
     */
    maxParallelLaunches?: number;
    /**
     * The type of resource to use for pre-provisioning the Windows AMI for faster launching. Supported values include: <code>snapshot</code>, which is the default value.
     */
    resourceType?: string;
    /**
     * Configuration settings for creating and managing the snapshots that are used for pre-provisioning the Windows AMI for faster launching. The associated <code>ResourceType</code> must be <code>snapshot</code>.
     */
    snapshotConfiguration?: GETEnableFastLaunchSnapshotConfiguration;
    version: GETEnableFastLaunchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableFastLaunchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

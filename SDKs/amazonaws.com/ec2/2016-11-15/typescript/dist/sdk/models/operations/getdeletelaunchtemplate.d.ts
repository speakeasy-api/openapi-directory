import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLaunchTemplateActionEnum {
    DeleteLaunchTemplate = "DeleteLaunchTemplate"
}
export declare enum GETDeleteLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteLaunchTemplateRequest extends SpeakeasyBase {
    action: GETDeleteLaunchTemplateActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * <p>The ID of the launch template.</p> <p>You must specify either the <code>LaunchTemplateId</code> or the <code>LaunchTemplateName</code>, but not both.</p>
     */
    launchTemplateId?: string;
    /**
     * <p>The name of the launch template.</p> <p>You must specify either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p>
     */
    launchTemplateName?: string;
    version: GETDeleteLaunchTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

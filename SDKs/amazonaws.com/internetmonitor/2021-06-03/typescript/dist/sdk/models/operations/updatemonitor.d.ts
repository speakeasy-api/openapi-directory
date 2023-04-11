import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and <code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>.
 */
export declare enum UpdateMonitorRequestBodyStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Error = "ERROR"
}
export declare class UpdateMonitorRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. You should not reuse the same client token for other API requests.
     */
    clientToken?: string;
    /**
     * The maximum number of city-network combinations (that is, combinations of a city location and network, such as an ISP) to be monitored for your resources.
     */
    maxCityNetworksToMonitor?: number;
    /**
     * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p> <p>You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of resources.</p> <note> <p>If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.</p> </note>
     */
    resourcesToAdd?: string[];
    /**
     * The resources to remove from a monitor, which you provide as a set of Amazon Resource Names (ARNs).
     */
    resourcesToRemove?: string[];
    /**
     * The status for a monitor. The accepted values for <code>Status</code> with the <code>UpdateMonitor</code> API call are the following: <code>ACTIVE</code> and <code>INACTIVE</code>. The following values are <i>not</i> accepted: <code>PENDING</code>, and <code>ERROR</code>.
     */
    status?: UpdateMonitorRequestBodyStatusEnum;
}
export declare class UpdateMonitorRequest extends SpeakeasyBase {
    /**
     * The name of the monitor.
     */
    monitorName: string;
    requestBody: UpdateMonitorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMonitorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateMonitorOutput?: shared.UpdateMonitorOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMonitorRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
     */
    clientToken?: string;
    /**
     * The maximum number of city-network combinations (that is, combinations of a city location and network, such as an ISP) to be monitored for your resources.
     */
    maxCityNetworksToMonitor: number;
    /**
     * The name of the monitor.
     */
    monitorName: string;
    /**
     * <p>The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).</p> <p>You can add a combination of Amazon Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add Amazon WorkSpaces directories. You can't add all three types of resources.</p> <note> <p>If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.</p> </note>
     */
    resources?: string[];
    /**
     * The tags for a monitor. You can add a maximum of 50 tags in Internet Monitor.
     */
    tags?: Record<string, string>;
}
export declare class CreateMonitorRequest extends SpeakeasyBase {
    requestBody: CreateMonitorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMonitorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createMonitorOutput?: shared.CreateMonitorOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

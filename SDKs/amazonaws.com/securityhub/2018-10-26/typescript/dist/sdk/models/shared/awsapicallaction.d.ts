import { SpeakeasyBase } from "../../../internal/utils";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
import { AwsApiCallActionDomainDetails } from "./awsapicallactiondomaindetails";
/**
 * Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
 */
export declare class AwsApiCallAction extends SpeakeasyBase {
    affectedResources?: Record<string, string>;
    api?: string;
    callerType?: string;
    domainDetails?: AwsApiCallActionDomainDetails;
    firstSeen?: string;
    lastSeen?: string;
    remoteIpDetails?: ActionRemoteIpDetails;
    serviceName?: string;
}

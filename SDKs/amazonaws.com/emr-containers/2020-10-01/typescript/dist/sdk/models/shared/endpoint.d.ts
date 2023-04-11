import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { ConfigurationOverrides } from "./configurationoverrides";
import { EndpointStateEnum } from "./endpointstateenum";
import { FailureReasonEnum } from "./failurereasonenum";
/**
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
 */
export declare class Endpoint extends SpeakeasyBase {
    arn?: string;
    certificateArn?: string;
    certificateAuthority?: Certificate;
    configurationOverrides?: ConfigurationOverrides;
    createdAt?: Date;
    executionRoleArn?: string;
    failureReason?: FailureReasonEnum;
    id?: string;
    name?: string;
    releaseLabel?: string;
    securityGroup?: string;
    serverUrl?: string;
    state?: EndpointStateEnum;
    stateDetails?: string;
    subnetIds?: string[];
    tags?: Record<string, string>;
    type?: string;
    virtualClusterId?: string;
}

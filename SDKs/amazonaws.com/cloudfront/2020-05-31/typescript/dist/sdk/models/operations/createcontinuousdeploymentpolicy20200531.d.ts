import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains the configuration for a continuous deployment policy.
 */
export declare class CreateContinuousDeploymentPolicy20200531RequestBodyContinuousDeploymentPolicyConfig extends SpeakeasyBase {
    enabled?: boolean;
    stagingDistributionDnsNames?: shared.StagingDistributionDnsNames;
    trafficConfig?: shared.TrafficConfig;
}
export declare class CreateContinuousDeploymentPolicy20200531RequestBody extends SpeakeasyBase {
    /**
     * Contains the configuration for a continuous deployment policy.
     */
    continuousDeploymentPolicyConfig: CreateContinuousDeploymentPolicy20200531RequestBodyContinuousDeploymentPolicyConfig;
}
export declare class CreateContinuousDeploymentPolicy20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContinuousDeploymentPolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

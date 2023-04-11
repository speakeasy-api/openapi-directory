import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains the configuration for a continuous deployment policy.
 */
export declare class UpdateContinuousDeploymentPolicy20200531RequestBodyContinuousDeploymentPolicyConfig extends SpeakeasyBase {
    enabled?: boolean;
    stagingDistributionDnsNames?: shared.StagingDistributionDnsNames;
    trafficConfig?: shared.TrafficConfig;
}
export declare class UpdateContinuousDeploymentPolicy20200531RequestBody extends SpeakeasyBase {
    /**
     * Contains the configuration for a continuous deployment policy.
     */
    continuousDeploymentPolicyConfig: UpdateContinuousDeploymentPolicy20200531RequestBodyContinuousDeploymentPolicyConfig;
}
export declare class UpdateContinuousDeploymentPolicy20200531Request extends SpeakeasyBase {
    /**
     * The identifier of the continuous deployment policy that you are updating.
     */
    id: string;
    /**
     * The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateContinuousDeploymentPolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

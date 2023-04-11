import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a site plan.
 */
export declare class UpdateNetworkSitePlanRequestBodyPendingPlan extends SpeakeasyBase {
    options?: shared.NameValuePair[];
    resourceDefinitions?: shared.NetworkResourceDefinition[];
}
export declare class UpdateNetworkSitePlanRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the network site.
     */
    networkSiteArn: string;
    /**
     * Information about a site plan.
     */
    pendingPlan: UpdateNetworkSitePlanRequestBodyPendingPlan;
}
export declare class UpdateNetworkSitePlanRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSitePlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateNetworkSitePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateNetworkSiteResponse?: shared.UpdateNetworkSiteResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

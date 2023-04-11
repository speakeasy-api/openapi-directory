import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a site plan.
 */
export declare class CreateNetworkSiteRequestBodyPendingPlan extends SpeakeasyBase {
    options?: shared.NameValuePair[];
    resourceDefinitions?: shared.NetworkResourceDefinition[];
}
export declare class CreateNetworkSiteRequestBody extends SpeakeasyBase {
    /**
     * The Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site.
     */
    availabilityZone?: string;
    /**
     * The ID of the Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site.
     */
    availabilityZoneId?: string;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The description of the site.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the network.
     */
    networkArn: string;
    /**
     * The name of the site. You can't change the name after you create the site.
     */
    networkSiteName: string;
    /**
     * Information about a site plan.
     */
    pendingPlan?: CreateNetworkSiteRequestBodyPendingPlan;
    /**
     *  The tags to apply to the network site.
     */
    tags?: Record<string, string>;
}
export declare class CreateNetworkSiteRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSiteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateNetworkSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNetworkSiteResponse?: shared.CreateNetworkSiteResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

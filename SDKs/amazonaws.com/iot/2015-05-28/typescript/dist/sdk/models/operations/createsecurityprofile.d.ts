import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSecurityProfileRequestBody extends SpeakeasyBase {
    /**
     * <p> <i>Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
     */
    additionalMetricsToRetain?: string[];
    /**
     * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
     */
    additionalMetricsToRetainV2?: shared.MetricToRetain[];
    /**
     * Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
     */
    alertTargets?: Record<string, shared.AlertTarget>;
    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     */
    behaviors?: shared.Behavior[];
    /**
     * A description of the security profile.
     */
    securityProfileDescription?: string;
    /**
     * Metadata that can be used to manage the security profile.
     */
    tags?: shared.Tag[];
}
export declare class CreateSecurityProfileRequest extends SpeakeasyBase {
    requestBody: CreateSecurityProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name you are giving to the security profile.
     */
    securityProfileName: string;
}
export declare class CreateSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSecurityProfileResponse?: shared.CreateSecurityProfileResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

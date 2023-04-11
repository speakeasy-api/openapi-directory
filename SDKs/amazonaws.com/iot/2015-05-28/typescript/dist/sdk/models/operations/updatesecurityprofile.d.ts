import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSecurityProfileRequestBody extends SpeakeasyBase {
    /**
     * <p> <i>Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
     */
    additionalMetricsToRetain?: string[];
    /**
     * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
     */
    additionalMetricsToRetainV2?: shared.MetricToRetain[];
    /**
     * Where the alerts are sent. (Alerts are always sent to the console.)
     */
    alertTargets?: Record<string, shared.AlertTarget>;
    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     */
    behaviors?: shared.Behavior[];
    /**
     * If true, delete all <code>additionalMetricsToRetain</code> defined for this security profile. If any <code>additionalMetricsToRetain</code> are defined in the current invocation, an exception occurs.
     */
    deleteAdditionalMetricsToRetain?: boolean;
    /**
     * If true, delete all <code>alertTargets</code> defined for this security profile. If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.
     */
    deleteAlertTargets?: boolean;
    /**
     * If true, delete all <code>behaviors</code> defined for this security profile. If any <code>behaviors</code> are defined in the current invocation, an exception occurs.
     */
    deleteBehaviors?: boolean;
    /**
     * A description of the security profile.
     */
    securityProfileDescription?: string;
}
export declare class UpdateSecurityProfileRequest extends SpeakeasyBase {
    requestBody: UpdateSecurityProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
     */
    expectedVersion?: number;
    /**
     * The name of the security profile you want to update.
     */
    securityProfileName: string;
}
export declare class UpdateSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
    updateSecurityProfileResponse?: shared.UpdateSecurityProfileResponse;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}

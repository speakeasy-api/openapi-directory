import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The properties of a billing group.
 */
export declare class UpdateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
    billingGroupDescription?: string;
}
export declare class UpdateBillingGroupRequestBody extends SpeakeasyBase {
    /**
     * The properties of a billing group.
     */
    billingGroupProperties: UpdateBillingGroupRequestBodyBillingGroupProperties;
    /**
     * The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>UpdateBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.
     */
    expectedVersion?: number;
}
export declare class UpdateBillingGroupRequest extends SpeakeasyBase {
    requestBody: UpdateBillingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the billing group.
     */
    billingGroupName: string;
}
export declare class UpdateBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateBillingGroupResponse?: shared.UpdateBillingGroupResponse;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}

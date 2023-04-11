import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProfileRequestBody extends SpeakeasyBase {
    /**
     *  The number of seconds the vended session credentials are valid for.
     */
    durationSeconds?: number;
    /**
     * A list of managed policy ARNs that apply to the vended session credentials.
     */
    managedPolicyArns?: string[];
    /**
     * The name of the profile.
     */
    name?: string;
    /**
     * A list of IAM roles that this profile can assume in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.
     */
    roleArns?: string[];
    /**
     * A session policy that applies to the trust boundary of the vended session credentials.
     */
    sessionPolicy?: string;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    requestBody: UpdateProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the profile.
     */
    profileId: string;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    profileDetailResponse?: shared.ProfileDetailResponse;
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

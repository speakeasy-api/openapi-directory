import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProfileRequestBody extends SpeakeasyBase {
    /**
     *  The number of seconds the vended session credentials are valid for.
     */
    durationSeconds?: number;
    /**
     * Specifies whether the profile is enabled.
     */
    enabled?: boolean;
    /**
     * A list of managed policy ARNs that apply to the vended session credentials.
     */
    managedPolicyArns?: string[];
    /**
     * The name of the profile.
     */
    name: string;
    /**
     * Specifies whether instance properties are required in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile.
     */
    requireInstanceProperties?: boolean;
    /**
     * A list of IAM roles that this profile can assume in a <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> operation.
     */
    roleArns: string[];
    /**
     * A session policy that applies to the trust boundary of the vended session credentials.
     */
    sessionPolicy?: string;
    /**
     * The tags to attach to the profile.
     */
    tags?: shared.Tag[];
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    requestBody: CreateProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    profileDetailResponse?: shared.ProfileDetailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateSecurityProfileBehaviorsRequestBody extends SpeakeasyBase {
    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     */
    behaviors: shared.Behavior[];
}
export declare class ValidateSecurityProfileBehaviorsRequest extends SpeakeasyBase {
    requestBody: ValidateSecurityProfileBehaviorsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ValidateSecurityProfileBehaviorsResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    validateSecurityProfileBehaviorsResponse?: shared.ValidateSecurityProfileBehaviorsResponse;
}

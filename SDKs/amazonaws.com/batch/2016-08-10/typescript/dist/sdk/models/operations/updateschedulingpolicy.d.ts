import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The fair share policy for a scheduling policy.
 */
export declare class UpdateSchedulingPolicyRequestBodyFairsharePolicy extends SpeakeasyBase {
    computeReservation?: number;
    shareDecaySeconds?: number;
    shareDistribution?: shared.ShareAttributes[];
}
export declare class UpdateSchedulingPolicyRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the scheduling policy to update.
     */
    arn: string;
    /**
     * The fair share policy for a scheduling policy.
     */
    fairsharePolicy?: UpdateSchedulingPolicyRequestBodyFairsharePolicy;
}
export declare class UpdateSchedulingPolicyRequest extends SpeakeasyBase {
    requestBody: UpdateSchedulingPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSchedulingPolicyResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSchedulingPolicyResponse?: Record<string, any>;
}

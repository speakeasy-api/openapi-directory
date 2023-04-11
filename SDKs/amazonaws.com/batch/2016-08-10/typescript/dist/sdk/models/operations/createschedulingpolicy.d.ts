import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The fair share policy for a scheduling policy.
 */
export declare class CreateSchedulingPolicyRequestBodyFairsharePolicy extends SpeakeasyBase {
    computeReservation?: number;
    shareDecaySeconds?: number;
    shareDistribution?: shared.ShareAttributes[];
}
export declare class CreateSchedulingPolicyRequestBody extends SpeakeasyBase {
    /**
     * The fair share policy for a scheduling policy.
     */
    fairsharePolicy?: CreateSchedulingPolicyRequestBodyFairsharePolicy;
    /**
     * The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
     */
    name: string;
    /**
     * <p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p>
     */
    tags?: Record<string, string>;
}
export declare class CreateSchedulingPolicyRequest extends SpeakeasyBase {
    requestBody: CreateSchedulingPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSchedulingPolicyResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createSchedulingPolicyResponse?: shared.CreateSchedulingPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}

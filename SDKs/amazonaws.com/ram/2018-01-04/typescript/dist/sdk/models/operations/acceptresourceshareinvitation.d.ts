import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AcceptResourceShareInvitationRequestBody extends SpeakeasyBase {
    /**
     * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p>
     */
    clientToken?: string;
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the invitation that you want to accept.
     */
    resourceShareInvitationArn: string;
}
export declare class AcceptResourceShareInvitationRequest extends SpeakeasyBase {
    requestBody: AcceptResourceShareInvitationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcceptResourceShareInvitationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptResourceShareInvitationResponse?: shared.AcceptResourceShareInvitationResponse;
    contentType: string;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceShareInvitationAlreadyRejectedException
     */
    resourceShareInvitationAlreadyRejectedException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceShareInvitationAlreadyAcceptedException
     */
    resourceShareInvitationAlreadyAcceptedException?: any;
    /**
     * ResourceShareInvitationArnNotFoundException
     */
    resourceShareInvitationArnNotFoundException?: any;
    /**
     * ResourceShareInvitationExpiredException
     */
    resourceShareInvitationExpiredException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}

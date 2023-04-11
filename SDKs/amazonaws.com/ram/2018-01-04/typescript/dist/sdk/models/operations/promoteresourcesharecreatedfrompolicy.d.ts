import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PromoteResourceShareCreatedFromPolicyRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share to promote.
     */
    resourceShareArn: string;
}
export declare class PromoteResourceShareCreatedFromPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * Success
     */
    promoteResourceShareCreatedFromPolicyResponse?: shared.PromoteResourceShareCreatedFromPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceShareLimitExceededException
     */
    resourceShareLimitExceededException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}

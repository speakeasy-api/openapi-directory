import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisassociateResourceSharePermissionRequestBody extends SpeakeasyBase {
    /**
     * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p>
     */
    clientToken?: string;
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the permission to disassociate from the resource share. Changes to permissions take effect immediately.
     */
    permissionArn: string;
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the resource share from which you want to disassociate a permission.
     */
    resourceShareArn: string;
}
export declare class DisassociateResourceSharePermissionRequest extends SpeakeasyBase {
    requestBody: DisassociateResourceSharePermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateResourceSharePermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateResourceSharePermissionResponse?: shared.DisassociateResourceSharePermissionResponse;
    /**
     * InvalidClientTokenException
     */
    invalidClientTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidStateTransitionException
     */
    invalidStateTransitionException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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

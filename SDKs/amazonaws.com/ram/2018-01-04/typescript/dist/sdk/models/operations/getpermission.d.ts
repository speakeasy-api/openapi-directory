import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPermissionRequestBody extends SpeakeasyBase {
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resoure Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
     */
    permissionArn: string;
    /**
     * Specifies identifier for the version of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.
     */
    permissionVersion?: number;
}
export declare class GetPermissionRequest extends SpeakeasyBase {
    requestBody: GetPermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPermissionResponse?: shared.GetPermissionResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MalformedArnException
     */
    malformedArnException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}

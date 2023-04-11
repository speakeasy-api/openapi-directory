import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p/>
 */
export declare enum GetResourcePermissionRequestBodyActionTypeEnum {
    Restore = "RESTORE"
}
export declare class GetResourcePermissionRequestBody extends SpeakeasyBase {
    /**
     * <p/>
     */
    actionType?: GetResourcePermissionRequestBodyActionTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: string;
}
export declare class GetResourcePermissionRequest extends SpeakeasyBase {
    requestBody: GetResourcePermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourcePermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourcePermissionOutput?: shared.GetResourcePermissionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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

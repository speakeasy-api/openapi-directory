import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Delete or restore the permissions on the target database.
 */
export declare enum DeleteResourcePermissionRequestBodyActionTypeEnum {
    Restore = "RESTORE"
}
export declare class DeleteResourcePermissionRequestBody extends SpeakeasyBase {
    /**
     * Delete or restore the permissions on the target database.
     */
    actionType?: DeleteResourcePermissionRequestBodyActionTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: string;
    /**
     * The Amazon Resource Name (ARN) of the source resource.
     */
    sourceResourceArn?: string;
}
export declare class DeleteResourcePermissionRequest extends SpeakeasyBase {
    requestBody: DeleteResourcePermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourcePermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcePermissionOutput?: shared.DeleteResourcePermissionOutput;
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

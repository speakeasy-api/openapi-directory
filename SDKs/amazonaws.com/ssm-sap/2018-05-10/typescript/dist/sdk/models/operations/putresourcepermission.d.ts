import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p/>
 */
export declare enum PutResourcePermissionRequestBodyActionTypeEnum {
    Restore = "RESTORE"
}
export declare class PutResourcePermissionRequestBody extends SpeakeasyBase {
    /**
     * <p/>
     */
    actionType: PutResourcePermissionRequestBodyActionTypeEnum;
    /**
     * <p/>
     */
    resourceArn: string;
    /**
     * <p/>
     */
    sourceResourceArn: string;
}
export declare class PutResourcePermissionRequest extends SpeakeasyBase {
    requestBody: PutResourcePermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutResourcePermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putResourcePermissionOutput?: shared.PutResourcePermissionOutput;
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

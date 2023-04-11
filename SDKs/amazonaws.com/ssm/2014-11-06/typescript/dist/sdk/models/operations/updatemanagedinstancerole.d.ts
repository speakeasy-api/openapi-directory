import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateManagedInstanceRoleXAmzTargetEnum {
    AmazonSSMUpdateManagedInstanceRole = "AmazonSSM.UpdateManagedInstanceRole"
}
export declare class UpdateManagedInstanceRoleRequest extends SpeakeasyBase {
    updateManagedInstanceRoleRequest: shared.UpdateManagedInstanceRoleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateManagedInstanceRoleXAmzTargetEnum;
}
export declare class UpdateManagedInstanceRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateManagedInstanceRoleResult?: Record<string, any>;
}

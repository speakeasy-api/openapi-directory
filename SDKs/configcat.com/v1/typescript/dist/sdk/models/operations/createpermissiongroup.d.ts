import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePermissionGroupRequest extends SpeakeasyBase {
    createPermissionGroupRequest: shared.CreatePermissionGroupRequest;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class CreatePermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the creation was successful.
     */
    permissionGroupModel?: shared.PermissionGroupModel;
    /**
     * When the creation was successful.
     */
    permissionGroupModelHaljson?: shared.PermissionGroupModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

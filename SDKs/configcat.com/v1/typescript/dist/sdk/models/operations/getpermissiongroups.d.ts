import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPermissionGroupsRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetPermissionGroupsResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModelHaljsons?: shared.PermissionGroupModelHaljson[];
    permissionGroupModels?: shared.PermissionGroupModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

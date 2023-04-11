import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum AccountPatchPermissionsFormTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class AccountPatchPermissionsFormRequest extends SpeakeasyBase {
    /**
     * The patch permission request
     */
    apiCoreRequestsPermissionPatchRequest: shared.ApiCoreRequestsPermissionPatchRequest;
    /**
     * Id of the guest
     */
    guestId: number;
    /**
     * Can be "datapoint" or "group"
     */
    type: AccountPatchPermissionsFormTypeEnum;
}
export declare class AccountPatchPermissionsFormResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

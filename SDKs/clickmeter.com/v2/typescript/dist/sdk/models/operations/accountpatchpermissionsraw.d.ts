import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum AccountPatchPermissionsRawTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class AccountPatchPermissionsRawRequest extends SpeakeasyBase {
    /**
     * The patch permission request
     */
    requestBody: Uint8Array;
    /**
     * Id of the guest
     */
    guestId: number;
    /**
     * Can be "datapoint" or "group"
     */
    type: AccountPatchPermissionsRawTypeEnum;
}
export declare class AccountPatchPermissionsRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

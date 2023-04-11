import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchFormRequest extends SpeakeasyBase {
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
    type: PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum;
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchFormResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

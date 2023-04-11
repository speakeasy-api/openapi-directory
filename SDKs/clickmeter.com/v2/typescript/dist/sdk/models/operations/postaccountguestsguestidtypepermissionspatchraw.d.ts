import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be "datapoint" or "group"
 */
export declare enum PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchRawRequest extends SpeakeasyBase {
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
    type: PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum;
}
export declare class PostAccountGuestsGuestIdTypePermissionsPatchRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

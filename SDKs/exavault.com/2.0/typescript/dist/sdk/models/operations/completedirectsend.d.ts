import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteDirectSendRequest extends SpeakeasyBase {
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * ID of the share to trigger invitations for.
     */
    id: number;
}
export declare class CompleteDirectSendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    shareResponse?: shared.ShareResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

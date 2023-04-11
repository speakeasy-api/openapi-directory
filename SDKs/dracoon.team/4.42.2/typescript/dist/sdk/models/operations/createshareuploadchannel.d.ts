import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateShareUploadChannelRequest extends SpeakeasyBase {
    createShareUploadChannelRequest: shared.CreateShareUploadChannelRequest;
    /**
     * Access key
     */
    accessKey: string;
}
export declare class CreateShareUploadChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createShareUploadChannelResponse?: shared.CreateShareUploadChannelResponse;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

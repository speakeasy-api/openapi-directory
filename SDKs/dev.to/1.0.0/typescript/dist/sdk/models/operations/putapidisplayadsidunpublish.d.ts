import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutApiDisplayAdsIdUnpublishRequest extends SpeakeasyBase {
    /**
     * The ID of the user to unpublish.
     */
    id: number;
}
export declare class PutApiDisplayAdsIdUnpublishResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSsoStrategiesIdSyncRequest extends SpeakeasyBase {
    /**
     * Sso Strategy ID.
     */
    id: number;
}
export declare class PostSsoStrategiesIdSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

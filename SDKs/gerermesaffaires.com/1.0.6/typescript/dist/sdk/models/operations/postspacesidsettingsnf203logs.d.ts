import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdSettingsNf203LogsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * State of activation of the logs
 */
export declare class PostSpacesIdSettingsNf203LogsRequestBody extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class PostSpacesIdSettingsNf203LogsRequest extends SpeakeasyBase {
    /**
     * State of activation of the logs
     */
    requestBody?: PostSpacesIdSettingsNf203LogsRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PostSpacesIdSettingsNf203LogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

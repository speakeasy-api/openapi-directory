import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const GetV1ServerList: readonly ["https://ipgeolocation.abstractapi.com"];
export declare class GetV1Request extends SpeakeasyBase {
    apiKey: string;
    fields?: string;
    ipAddress?: string;
}
export declare class GetV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Location of geolocated IP
     */
    inlineResponse200?: shared.InlineResponse200;
}

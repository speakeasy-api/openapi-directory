import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchFlightOffersHeaders extends SpeakeasyBase {
    xHTTPMethodOverride: string;
}
export declare class SearchFlightOffersRequest extends SpeakeasyBase {
    headers: SearchFlightOffersHeaders;
    request: any;
}
export declare class SearchFlightOffersResponse extends SpeakeasyBase {
    contentType: string;
    error400?: any;
    error500?: any;
    statusCode: number;
    success?: any;
}

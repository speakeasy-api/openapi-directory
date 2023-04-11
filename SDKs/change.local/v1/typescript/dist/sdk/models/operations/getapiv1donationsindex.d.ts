import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1DonationsIndexSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetApiV1DonationsIndexRequest extends SpeakeasyBase {
    /**
     * Which page to return. This endpoint is paginated, and returns maximum 30 donations per page.
     */
    page?: number;
}
export declare class GetApiV1DonationsIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

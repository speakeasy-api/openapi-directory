import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1DonationsShowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetApiV1DonationsShowRequest extends SpeakeasyBase {
    /**
     * The id of a donation. Ids are returned when a donation is created.
     */
    id: string;
}
export declare class GetApiV1DonationsShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

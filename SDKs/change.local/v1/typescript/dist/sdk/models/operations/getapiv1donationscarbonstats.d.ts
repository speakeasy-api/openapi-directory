import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1DonationsCarbonStatsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetApiV1DonationsCarbonStatsRequest extends SpeakeasyBase {
    /**
     * The id of a donation to the CarbonFund nonprofit. Ids are returned when a donation is created. If an ID is not provided, the total stats for all donations to CarbonFund are returned.
     */
    id?: number;
}
export declare class GetApiV1DonationsCarbonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

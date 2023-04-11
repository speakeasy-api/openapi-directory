import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllStatsExampleParametersRequest extends SpeakeasyBase {
    playerIds?: string;
    season?: string;
}
export declare class AllStatsExampleParametersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllGamesExampleParametersRequest extends SpeakeasyBase {
    seasons?: string;
    teamIds?: string;
}
export declare class AllGamesExampleParametersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSessionMatchesRequest extends SpeakeasyBase {
    name: string;
}
export declare class GetSessionMatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetParentsRequest extends SpeakeasyBase {
    count: number;
    cursor: string;
    sha1: string;
}
export declare class GetParentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

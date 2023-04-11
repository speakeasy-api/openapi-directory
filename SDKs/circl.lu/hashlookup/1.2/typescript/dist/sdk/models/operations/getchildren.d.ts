import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChildrenRequest extends SpeakeasyBase {
    count: number;
    cursor: string;
    sha1: string;
}
export declare class GetChildrenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

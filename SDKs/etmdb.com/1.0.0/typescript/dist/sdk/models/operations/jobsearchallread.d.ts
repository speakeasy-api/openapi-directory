import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class JobSearchallReadRequest extends SpeakeasyBase {
    companyName: string;
}
export declare class JobSearchallReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

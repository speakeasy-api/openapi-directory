import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class JobSearchReadRequest extends SpeakeasyBase {
    jobTitle: string;
}
export declare class JobSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

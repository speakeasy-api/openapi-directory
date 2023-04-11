import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StromkontoRegisterRequestBody extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    zipcode?: string;
}
export declare class StromkontoRegisterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

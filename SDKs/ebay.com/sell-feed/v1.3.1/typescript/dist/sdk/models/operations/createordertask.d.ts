import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrderTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateOrderTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

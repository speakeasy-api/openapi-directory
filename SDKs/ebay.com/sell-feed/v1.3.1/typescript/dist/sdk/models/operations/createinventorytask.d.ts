import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateInventoryTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateInventoryTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SublabsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class SublabsDeleteRequest extends SpeakeasyBase {
    id: number;
}
export declare class SublabsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

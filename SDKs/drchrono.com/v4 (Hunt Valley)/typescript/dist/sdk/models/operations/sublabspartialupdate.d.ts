import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SublabsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class SublabsPartialUpdateRequest extends SpeakeasyBase {
    id: number;
}
export declare class SublabsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

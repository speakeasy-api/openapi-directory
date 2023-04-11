import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SublabsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class SublabsUpdateRequest extends SpeakeasyBase {
    id: number;
}
export declare class SublabsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

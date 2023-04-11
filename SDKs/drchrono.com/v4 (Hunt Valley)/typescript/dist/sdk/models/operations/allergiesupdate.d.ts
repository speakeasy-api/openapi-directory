import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllergiesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AllergiesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AllergiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

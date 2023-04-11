import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchProfileJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchProfileApplicationJSONBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare class PatchProfileApplicationJSONIDFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PatchProfileApplicationJSONSexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Profile to add
 */
export declare class PatchProfileApplicationJSON extends SpeakeasyBase {
    birth?: PatchProfileApplicationJSONBirth;
    birthName?: string;
    email?: string;
    firstName?: string;
    idFile?: PatchProfileApplicationJSONIDFile;
    name?: string;
    sex?: PatchProfileApplicationJSONSexEnum;
}
export declare class PatchProfileJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

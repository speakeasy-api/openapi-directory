import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchProfileMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PatchProfileMultipartFormDataBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare class PatchProfileMultipartFormDataIDFile extends SpeakeasyBase {
    idFile: string;
    content: Uint8Array;
}
export declare enum PatchProfileMultipartFormDataSexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Profile to add
 */
export declare class PatchProfileMultipartFormData1 extends SpeakeasyBase {
    birth?: PatchProfileMultipartFormDataBirth;
    birthName?: string;
    email?: string;
    firstName?: string;
    idFile?: PatchProfileMultipartFormDataIDFile;
    name?: string;
    sex?: PatchProfileMultipartFormDataSexEnum;
}
export declare class PatchProfileMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

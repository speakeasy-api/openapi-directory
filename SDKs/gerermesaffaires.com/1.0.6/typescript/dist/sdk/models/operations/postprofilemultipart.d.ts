import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostProfileMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostProfileMultipartFormDataBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare class PostProfileMultipartFormDataIDFile extends SpeakeasyBase {
    idFile: string;
    content: Uint8Array;
}
export declare enum PostProfileMultipartFormDataSexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Profile to add
 */
export declare class PostProfileMultipartFormData1 extends SpeakeasyBase {
    birth: PostProfileMultipartFormDataBirth;
    birthName: string;
    email: string;
    firstName: string;
    idFile?: PostProfileMultipartFormDataIDFile;
    name: string;
    sex: PostProfileMultipartFormDataSexEnum;
}
export declare class PostProfileMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

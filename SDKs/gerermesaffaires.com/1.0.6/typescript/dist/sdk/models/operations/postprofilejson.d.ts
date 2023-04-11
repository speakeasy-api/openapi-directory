import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostProfileJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostProfileApplicationJSONBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare class PostProfileApplicationJSONIDFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare enum PostProfileApplicationJSONSexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Profile to add
 */
export declare class PostProfileApplicationJSON extends SpeakeasyBase {
    birth: PostProfileApplicationJSONBirth;
    birthName: string;
    email: string;
    firstName: string;
    idFile?: PostProfileApplicationJSONIDFile;
    name: string;
    sex: PostProfileApplicationJSONSexEnum;
}
export declare class PostProfileJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

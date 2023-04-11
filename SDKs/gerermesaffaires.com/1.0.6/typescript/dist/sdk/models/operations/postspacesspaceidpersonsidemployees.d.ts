import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdPersonsIdEmployeesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdPersonsIdEmployeesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Employee to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdPersonsIdEmployeesRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    contractType?: string;
    employeeNumber?: string;
    end?: string;
    function?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdPersonsIdEmployeesRequestBodyLevelEnum;
    postalMail?: boolean;
    ssNumber?: string;
    start?: string;
}
export declare class PostSpacesSpaceIdPersonsIdEmployeesRequest extends SpeakeasyBase {
    /**
     * Employee to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdPersonsIdEmployeesRequestBody;
    /**
     * Id of the employee
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of folder created
 */
export declare class PostSpacesSpaceIdPersonsIdEmployees201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdPersonsIdEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdPersonsIdEmployees201ApplicationJSONObject?: PostSpacesSpaceIdPersonsIdEmployees201ApplicationJSON;
}

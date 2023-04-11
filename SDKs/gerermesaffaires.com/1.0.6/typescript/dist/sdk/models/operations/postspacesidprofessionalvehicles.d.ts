import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdProfessionalVehiclesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesIdProfessionalVehiclesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Professional vehicle to add
 */
export declare class PostSpacesIdProfessionalVehiclesRequestBody extends SpeakeasyBase {
    about?: string;
    brand?: string;
    comment?: string;
    companyTax?: boolean;
    dateIn?: string;
    dateOut?: string;
    designation: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesIdProfessionalVehiclesRequestBodyLevelEnum;
    model?: string;
    registrationDate?: string;
    registrationNumber?: string;
    type?: string;
    value?: number;
}
export declare class PostSpacesIdProfessionalVehiclesRequest extends SpeakeasyBase {
    /**
     * Professional vehicle to add
     */
    requestBody: PostSpacesIdProfessionalVehiclesRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of the professional vehicle created
 */
export declare class PostSpacesIdProfessionalVehicles201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdProfessionalVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the professional vehicle created
     */
    postSpacesIdProfessionalVehicles201ApplicationJSONObject?: PostSpacesIdProfessionalVehicles201ApplicationJSON;
}

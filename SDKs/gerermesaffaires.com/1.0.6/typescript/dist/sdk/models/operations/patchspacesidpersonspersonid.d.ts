import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchSpacesIdPersonsPersonIdRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class PatchSpacesIdPersonsPersonIdRequestBodyBirth extends SpeakeasyBase {
    date?: number;
    place?: string;
}
export declare enum PatchSpacesIdPersonsPersonIdRequestBodySexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Person to modify
 */
export declare class PatchSpacesIdPersonsPersonIdRequestBody extends SpeakeasyBase {
    address?: PatchSpacesIdPersonsPersonIdRequestBodyAddress;
    archivalDate?: string;
    birth?: PatchSpacesIdPersonsPersonIdRequestBodyBirth;
    comment?: string;
    email?: string;
    firstName?: string;
    mobile?: string;
    name?: string;
    sex?: PatchSpacesIdPersonsPersonIdRequestBodySexEnum;
}
export declare class PatchSpacesIdPersonsPersonIdRequest extends SpeakeasyBase {
    /**
     * Person to modify
     */
    requestBody: PatchSpacesIdPersonsPersonIdRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to modify or memberId
     */
    personId: string;
}
export declare class PatchSpacesIdPersonsPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

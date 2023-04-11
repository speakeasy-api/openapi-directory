import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdPersonsPersonIdDetailsRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
/**
 * Contact details to add or replace (Designation and Phone or Mail are mandatory)
 */
export declare class PostSpacesIdPersonsPersonIdDetailsRequestBody extends SpeakeasyBase {
    address?: PostSpacesIdPersonsPersonIdDetailsRequestBodyAddress;
    designation: string;
    email?: string[];
    phone?: string[];
}
export declare class PostSpacesIdPersonsPersonIdDetailsRequest extends SpeakeasyBase {
    /**
     * Contact details to add or replace (Designation and Phone or Mail are mandatory)
     */
    requestBody: PostSpacesIdPersonsPersonIdDetailsRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person or memberId
     */
    personId: string;
}
export declare class PostSpacesIdPersonsPersonIdDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

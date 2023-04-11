import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdCompanyEntitiesPersonIdDetailsRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
/**
 * Contact details to add or replace (Designation and Phone or Mail are mandatory)
 */
export declare class PostSpacesIdCompanyEntitiesPersonIdDetailsRequestBody extends SpeakeasyBase {
    address?: PostSpacesIdCompanyEntitiesPersonIdDetailsRequestBodyAddress;
    designation: string;
    email?: string[];
    phone?: string[];
}
export declare class PostSpacesIdCompanyEntitiesPersonIdDetailsRequest extends SpeakeasyBase {
    /**
     * Contact details to add or replace (Designation and Phone or Mail are mandatory)
     */
    requestBody: PostSpacesIdCompanyEntitiesPersonIdDetailsRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person or memberId
     */
    personId: string;
}
export declare class PostSpacesIdCompanyEntitiesPersonIdDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

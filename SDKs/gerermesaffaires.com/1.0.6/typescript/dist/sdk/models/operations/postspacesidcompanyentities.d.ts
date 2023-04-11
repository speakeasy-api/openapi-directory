import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdCompanyEntitiesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * Company to add Name or LegalName are mandatory
 */
export declare class PostSpacesIdCompanyEntitiesRequestBody extends SpeakeasyBase {
    apeCode?: string;
    archivalDate?: string;
    comment?: string;
    legalName: string;
    legalStatut?: string;
    name: string;
    registrationNumber?: string;
    type?: string;
    vatNumber?: string;
}
export declare class PostSpacesIdCompanyEntitiesRequest extends SpeakeasyBase {
    /**
     * Company to add Name or LegalName are mandatory
     */
    requestBody: PostSpacesIdCompanyEntitiesRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of company entity created
 */
export declare class PostSpacesIdCompanyEntities201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdCompanyEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of company entity created
     */
    postSpacesIdCompanyEntities201ApplicationJSONObject?: PostSpacesIdCompanyEntities201ApplicationJSON;
}

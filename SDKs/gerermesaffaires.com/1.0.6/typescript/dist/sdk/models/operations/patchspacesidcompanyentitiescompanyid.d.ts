import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Company entity to modify
 */
export declare class PatchSpacesIdCompanyEntitiesCompanyIdRequestBody extends SpeakeasyBase {
    apeCode?: string;
    archivalDate?: string;
    comment?: string;
    legalName?: string;
    legalStatut?: string;
    name?: string;
    registrationNumber?: string;
    type?: string;
    vatNumber?: string;
}
export declare class PatchSpacesIdCompanyEntitiesCompanyIdRequest extends SpeakeasyBase {
    /**
     * Company entity to modify
     */
    requestBody: PatchSpacesIdCompanyEntitiesCompanyIdRequestBody;
    /**
     * Id of the company entity to modify
     */
    companyId: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class PatchSpacesIdCompanyEntitiesCompanyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

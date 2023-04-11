import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdCompanyEntitiesCompanyIdRequest extends SpeakeasyBase {
    /**
     * Id of the company entity
     */
    companyId: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdCompanyEntitiesCompanyIdResponse extends SpeakeasyBase {
    /**
     * A company entity
     */
    companyEntity?: shared.CompanyEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

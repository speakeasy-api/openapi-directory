import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of Groups
     */
    groups?: shared.Group[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomFieldsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CustomFieldsListRequest extends SpeakeasyBase {
    /**
     * Group_id
     */
    groupId?: number;
}
export declare class CustomFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of custom fields
     */
    shortCustomFields?: shared.ShortCustomField[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

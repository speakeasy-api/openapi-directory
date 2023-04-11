import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ItemTypesListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ItemTypesListRequest extends SpeakeasyBase {
    /**
     * Identifier of the group for which the item types are requested
     */
    groupId?: number;
}
export declare class ItemTypesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of item types
     */
    itemTypes?: shared.ItemType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

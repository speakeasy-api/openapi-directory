import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserCategoriesFullRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * categorys
 */
export declare class GetUsersIdUserCategoriesFull200ApplicationJSON extends SpeakeasyBase {
    categorys: shared.Category[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserCategoriesFullResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * categorys
     */
    getUsersIdUserCategoriesFull200ApplicationJSONObject?: GetUsersIdUserCategoriesFull200ApplicationJSON;
}

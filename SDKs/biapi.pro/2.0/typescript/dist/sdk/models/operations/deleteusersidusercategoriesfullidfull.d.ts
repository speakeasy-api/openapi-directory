import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserCategoriesFullIdFullRequest extends SpeakeasyBase {
    expand?: string;
    idFull: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserCategoriesFullIdFullResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on Category resource
     */
    category?: shared.Category;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

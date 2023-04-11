import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogChangeCustomColumnUserNameRequest extends SpeakeasyBase {
    changeUserColumnNameRequest: shared.ChangeUserColumnNameRequest;
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogChangeCustomColumnUserNameResponse extends SpeakeasyBase {
    /**
     * When a user column name is duplicate.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A catalog importation is already in progress!
     */
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}

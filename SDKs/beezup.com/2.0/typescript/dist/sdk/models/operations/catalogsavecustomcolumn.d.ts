import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogSaveCustomColumnRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    createCustomColumnRequest: shared.CreateCustomColumnRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogSaveCustomColumnResponse extends SpeakeasyBase {
    /**
     * Occurs when a catalog custom column id is already used by a catalog column.
     *
     * @remarks
     * When the catalog custom column count limit has been reached.
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

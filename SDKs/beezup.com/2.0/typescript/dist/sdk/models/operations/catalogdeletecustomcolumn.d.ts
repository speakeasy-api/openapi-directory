import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogDeleteCustomColumnRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogDeleteCustomColumnResponse extends SpeakeasyBase {
    /**
     * Occurs when the parent category is not found.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogChangeCustomColumnExpressionRequest extends SpeakeasyBase {
    changeCustomColumnExpressionRequest: shared.ChangeCustomColumnExpressionRequest;
    /**
     * The custom column identifier
     */
    columnId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogChangeCustomColumnExpressionResponse extends SpeakeasyBase {
    /**
     * Occurs when the user try to change a custom column related to a Category. If you want to change this custom column expression you have to make a new manual importation.
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

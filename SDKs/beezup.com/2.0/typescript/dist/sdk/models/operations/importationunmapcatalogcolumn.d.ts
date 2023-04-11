import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationUnmapCatalogColumnRequest extends SpeakeasyBase {
    /**
     * The catalog column identifier
     */
    columnId: string;
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationUnmapCatalogColumnResponse extends SpeakeasyBase {
    /**
     * Occurs when a user tries to work on the wrong store.
     *
     * @remarks
     * Occurs when the message concerns the wrong execution.
     * Occurs when a catalog column is not found.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

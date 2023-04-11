import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationConfigureCatalogColumnRequest extends SpeakeasyBase {
    /**
     * The custom column identifier
     */
    columnId: string;
    configureCatalogColumnCatalogRequest: shared.ConfigureCatalogColumnCatalogRequest;
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationConfigureCatalogColumnResponse extends SpeakeasyBase {
    /**
     *
     * @remarks
     * When the catalog column name is not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

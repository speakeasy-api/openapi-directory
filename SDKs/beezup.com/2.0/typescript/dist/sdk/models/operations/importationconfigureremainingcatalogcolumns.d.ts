import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationConfigureRemainingCatalogColumnsRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationConfigureRemainingCatalogColumnsResponse extends SpeakeasyBase {
    /**
     * When a user column name is duplicate.
     *
     * @remarks
     * When the catalog column name are duplicate.
     * When the BeezUP column have duplicate mapping.
     * Occurs when the required beezup column is not mapped to any column.
     * Occurs when the category hierarchy is not correctly mapped.
     * Occurs when the duplicate strategy on {catalogColumnName} is not found.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

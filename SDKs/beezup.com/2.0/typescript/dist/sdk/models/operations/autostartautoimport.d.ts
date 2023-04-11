import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AutoStartAutoImportRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class AutoStartAutoImportResponse extends SpeakeasyBase {
    /**
     * Occurs when the catalog auto import is not configured.
     *
     * @remarks
     * When a user column name is duplicate.
     * When the catalog column name are duplicate.
     * When the BeezUP column have duplicate mapping.
     * Occurs when the required beezup column is not mapped to any column.
     * Occurs when the category hierarchy is not correctly mapped.
     * Occurs when the duplicate strategy on {catalogColumnName} is not found.
     * When the user tries to import to ofen the catalog file to download count max limit has been reached.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Catalog importation started
     */
    linksImportationGetImportationMonitoringLink?: shared.LinksImportationGetImportationMonitoringLink;
}

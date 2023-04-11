import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationCommitColumnsRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationCommitColumnsResponse extends SpeakeasyBase {
    /**
     * When a user column name is duplicate.
     *
     * @remarks
     * When the catalog column name are duplicate.
     * When the BeezUP column have duplicate mapping.
     * Occurs when the required beezup column is not mapped to any column.
     * Occurs when the category hierarchy is not correctly mapped.
     * When the catalog column count limit has been reached.
     * When the catalog custom column count limit has been reached.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetDetectedCatalogColumnsRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetDetectedCatalogColumnsResponse extends SpeakeasyBase {
    /**
     * ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    detectedCatalogColumnList?: shared.DetectedCatalogColumnList;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetCustomColumnsRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetCustomColumnsResponse extends SpeakeasyBase {
    /**
     * ExecutionId not found or not yet synchronized. If not synchronized within 30 sec, please contact our support
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Custom columns of current Importation successfully retrieved
     */
    importationCustomColumnList?: shared.ImportationCustomColumnList;
}

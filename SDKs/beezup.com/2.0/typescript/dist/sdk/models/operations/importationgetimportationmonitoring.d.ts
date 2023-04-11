import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetImportationMonitoringRequest extends SpeakeasyBase {
    /**
     * The execution identifier of you catalog importation
     */
    executionId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetImportationMonitoringResponse extends SpeakeasyBase {
    /**
     * ExecutionId not found or not yet synchronized. If not synchronized within 30 sec after the import has been started, please contact our support
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    importationMonitoring?: shared.ImportationMonitoring;
}

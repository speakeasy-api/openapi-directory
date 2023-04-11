import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationStartManualUpdateRequest extends SpeakeasyBase {
    startManualImportRequest: shared.StartManualImportRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationStartManualUpdateResponse extends SpeakeasyBase {
    /**
     * Missing Input configuration in the request
     *
     * @remarks
     * Occurs when there is a duplicate file number in the input configuration
     * Occurs when there is a duplicate file Uri in the input configuration
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A catalog importation is already in progress!
     */
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
    /**
     * Catalog importation started
     */
    linksImportationGetImportationMonitoringLink?: shared.LinksImportationGetImportationMonitoringLink;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationActivateAutoImportRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationActivateAutoImportResponse extends SpeakeasyBase {
    /**
     * Occurs when the user tries to auto import a local file.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

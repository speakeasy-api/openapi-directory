import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningGetSarifRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The SARIF ID obtained after uploading.
     */
    sarifId: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningGetSarif503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetSarifResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response if GitHub Advanced Security is not enabled for this repository
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningSarifsStatus?: shared.CodeScanningSarifsStatus;
    /**
     * Service unavailable
     */
    codeScanningGetSarif503ApplicationJSONObject?: CodeScanningGetSarif503ApplicationJSON;
}

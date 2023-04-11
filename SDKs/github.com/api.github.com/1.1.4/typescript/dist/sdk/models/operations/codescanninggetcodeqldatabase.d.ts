import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningGetCodeqlDatabaseRequest extends SpeakeasyBase {
    /**
     * The language of the CodeQL database.
     */
    language: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningGetCodeqlDatabase503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningGetCodeqlDatabaseResponse extends SpeakeasyBase {
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
    codeScanningCodeqlDatabase?: shared.CodeScanningCodeqlDatabase;
    /**
     * Service unavailable
     */
    codeScanningGetCodeqlDatabase503ApplicationJSONObject?: CodeScanningGetCodeqlDatabase503ApplicationJSON;
}

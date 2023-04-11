import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningListCodeqlDatabasesRequest extends SpeakeasyBase {
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
export declare class CodeScanningListCodeqlDatabases503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListCodeqlDatabasesResponse extends SpeakeasyBase {
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
    codeScanningCodeqlDatabases?: shared.CodeScanningCodeqlDatabase[];
    /**
     * Service unavailable
     */
    codeScanningListCodeqlDatabases503ApplicationJSONObject?: CodeScanningListCodeqlDatabases503ApplicationJSON;
}

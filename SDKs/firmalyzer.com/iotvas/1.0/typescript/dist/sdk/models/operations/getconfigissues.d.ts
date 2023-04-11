import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConfigIssuesSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class GetConfigIssuesRequest extends SpeakeasyBase {
    /**
     * SHA2 hash of device firmware
     */
    firmwareHash: string;
}
export declare class GetConfigIssuesResponse extends SpeakeasyBase {
    /**
     * Successful Response
     */
    configIssues?: shared.ConfigIssue[];
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

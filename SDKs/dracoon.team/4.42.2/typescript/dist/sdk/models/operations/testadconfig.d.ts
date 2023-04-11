import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestAdConfigRequest extends SpeakeasyBase {
    testActiveDirectoryConfigRequest: shared.TestActiveDirectoryConfigRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class TestAdConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testActiveDirectoryConfigResponse?: shared.TestActiveDirectoryConfigResponse;
}

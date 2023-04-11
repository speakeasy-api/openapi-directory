import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchBoundaryByIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchBoundaryByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Boundary
     */
    boundaryId: string;
}
export declare class FetchBoundaryByIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    boundary?: shared.Boundary;
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

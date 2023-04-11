import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuthIntrospectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    /**
     * Introspection object
     */
    introspection?: shared.Introspection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

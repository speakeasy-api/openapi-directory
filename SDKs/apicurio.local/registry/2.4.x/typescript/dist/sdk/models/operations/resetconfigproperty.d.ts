import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetConfigPropertyRequest extends SpeakeasyBase {
    /**
     * The name of a configuration property.
     */
    propertyName: string;
}
export declare class ResetConfigPropertyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

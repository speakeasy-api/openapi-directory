import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConfigPropertyRequest extends SpeakeasyBase {
    updateConfigurationProperty: shared.UpdateConfigurationProperty;
    /**
     * The name of a configuration property.
     */
    propertyName: string;
}
export declare class UpdateConfigPropertyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

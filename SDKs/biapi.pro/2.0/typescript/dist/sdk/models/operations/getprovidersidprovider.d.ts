import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdProviderRequest extends SpeakeasyBase {
    expand?: string;
    idProvider: number;
}
export declare class GetProvidersIdProviderResponse extends SpeakeasyBase {
    /**
     * Successful GET on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

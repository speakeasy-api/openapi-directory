import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCatchAllRequest extends SpeakeasyBase {
    /**
     * Contains the catch-all information.
     */
    createCatchAllRequest?: shared.CreateCatchAllRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
}
export declare class CreateCatchAllResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

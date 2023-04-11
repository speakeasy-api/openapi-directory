import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class DotGetUserSystemOverrides200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, shared.CommonModelsCoreSystem>;
    throttleSeconds?: number;
}
export declare class DotGetUserSystemOverridesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

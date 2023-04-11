import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHTMLUsingPOSTRequest extends SpeakeasyBase {
    padID?: string;
    rev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class GetHTMLUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class GetHTMLUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class GetHTMLUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class GetHTMLUsingPost200ApplicationJSONData extends SpeakeasyBase {
    html?: string;
}
/**
 * ok (code 0)
 */
export declare class GetHTMLUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: GetHTMLUsingPost200ApplicationJSONData;
    message?: string;
}
export declare class GetHTMLUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    getHTMLUsingPOST200ApplicationJSONObject?: GetHTMLUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    getHTMLUsingPOST400ApplicationJSONObject?: GetHTMLUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    getHTMLUsingPOST401ApplicationJSONObject?: GetHTMLUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    getHTMLUsingPOST500ApplicationJSONObject?: GetHTMLUsingPost500ApplicationJSON;
}

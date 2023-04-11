import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDiffHTMLUsingPOSTRequest extends SpeakeasyBase {
    endRev?: string;
    padID?: string;
    startRev?: string;
}
/**
 * internal api error (code 2)
 */
export declare class CreateDiffHTMLUsingPost500ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * no or wrong API key (code 4)
 */
export declare class CreateDiffHTMLUsingPost401ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * generic api error (code 1)
 */
export declare class CreateDiffHTMLUsingPost400ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
/**
 * ok (code 0)
 */
export declare class CreateDiffHTMLUsingPost200ApplicationJSON extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class CreateDiffHTMLUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ok (code 0)
     */
    createDiffHTMLUsingPOST200ApplicationJSONObject?: CreateDiffHTMLUsingPost200ApplicationJSON;
    /**
     * generic api error (code 1)
     */
    createDiffHTMLUsingPOST400ApplicationJSONObject?: CreateDiffHTMLUsingPost400ApplicationJSON;
    /**
     * no or wrong API key (code 4)
     */
    createDiffHTMLUsingPOST401ApplicationJSONObject?: CreateDiffHTMLUsingPost401ApplicationJSON;
    /**
     * internal api error (code 2)
     */
    createDiffHTMLUsingPOST500ApplicationJSONObject?: CreateDiffHTMLUsingPost500ApplicationJSON;
}

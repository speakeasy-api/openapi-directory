import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBinIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetBinIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bin not found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bin data
     */
    getBinId200ApplicationJSONObject?: Record<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConfigRequest extends SpeakeasyBase {
    /**
     * limit the results to keys matching the given value
     */
    search?: string;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

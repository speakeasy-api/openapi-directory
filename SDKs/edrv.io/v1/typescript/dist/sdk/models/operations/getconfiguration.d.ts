import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConfigurationRequest extends SpeakeasyBase {
    /**
     * ID of Configuration that needs to be fetched
     */
    id: string;
}
export declare class GetConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

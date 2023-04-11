import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConfigRequest extends SpeakeasyBase {
    /**
     * The identifier of the Config.
     */
    configId: string;
}
export declare class DeleteConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

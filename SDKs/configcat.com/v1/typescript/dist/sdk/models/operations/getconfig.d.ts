import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConfigRequest extends SpeakeasyBase {
    /**
     * The identifier of the Config.
     */
    configId: string;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    /**
     * When everything is ok, the config data returned.
     */
    configModel?: shared.ConfigModel;
    /**
     * When everything is ok, the config data returned.
     */
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

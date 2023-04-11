import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConfigRequest extends SpeakeasyBase {
    updateConfigRequest: shared.UpdateConfigRequest;
    /**
     * The identifier of the Config.
     */
    configId: string;
}
export declare class UpdateConfigResponse extends SpeakeasyBase {
    configModel?: shared.ConfigModel;
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

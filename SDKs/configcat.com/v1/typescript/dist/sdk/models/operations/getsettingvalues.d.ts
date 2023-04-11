import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingValuesRequest extends SpeakeasyBase {
    /**
     * The identifier of the Config.
     */
    configId: string;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
}
export declare class GetSettingValuesResponse extends SpeakeasyBase {
    /**
     * When everything is ok, the setting values returned.
     */
    configSettingValuesModel?: shared.ConfigSettingValuesModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

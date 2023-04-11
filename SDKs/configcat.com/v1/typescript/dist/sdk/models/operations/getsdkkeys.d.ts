import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSDKKeysRequest extends SpeakeasyBase {
    /**
     * The identifier of the Config.
     */
    configId: string;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
}
export declare class GetSDKKeysResponse extends SpeakeasyBase {
    contentType: string;
    sdkKeysModel?: shared.SDKKeysModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

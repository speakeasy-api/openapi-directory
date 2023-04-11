import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateConfigRequest extends SpeakeasyBase {
    createConfigRequest: shared.CreateConfigRequest;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class CreateConfigResponse extends SpeakeasyBase {
    /**
     * When the creation was successful.
     */
    configModel?: shared.ConfigModel;
    /**
     * When the creation was successful.
     */
    configModelHaljson?: shared.ConfigModelHaljson;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConfigsRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetConfigsResponse extends SpeakeasyBase {
    configModelHaljsons?: shared.ConfigModelHaljson[];
    configModels?: shared.ConfigModel[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

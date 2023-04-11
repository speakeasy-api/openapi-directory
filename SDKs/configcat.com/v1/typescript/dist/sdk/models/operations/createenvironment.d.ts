import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    createEnvironmentModel: shared.CreateEnvironmentModel;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the creation was successful.
     */
    environmentModel?: shared.EnvironmentModel;
    /**
     * When the creation was successful.
     */
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

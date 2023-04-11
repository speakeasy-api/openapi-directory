import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEnvironmentsRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    environmentModelHaljsons?: shared.EnvironmentModelHaljson[];
    environmentModels?: shared.EnvironmentModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

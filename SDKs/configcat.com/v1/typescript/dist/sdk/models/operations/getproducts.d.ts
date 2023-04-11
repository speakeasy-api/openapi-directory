import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsResponse extends SpeakeasyBase {
    contentType: string;
    productModelHaljsons?: shared.ProductModelHaljson[];
    productModels?: shared.ProductModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

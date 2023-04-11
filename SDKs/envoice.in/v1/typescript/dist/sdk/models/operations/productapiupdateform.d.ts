import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiUpdateFormRequest extends SpeakeasyBase {
    productUpdateApiModel: shared.ProductUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiUpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

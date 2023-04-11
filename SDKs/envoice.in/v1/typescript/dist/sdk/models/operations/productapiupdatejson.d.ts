import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiUpdateJsonRequest extends SpeakeasyBase {
    productUpdateApiModel: shared.ProductUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiUpdateJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

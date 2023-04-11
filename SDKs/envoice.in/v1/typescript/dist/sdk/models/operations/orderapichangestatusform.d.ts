import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiChangeStatusFormRequest extends SpeakeasyBase {
    changeOrderStatusApiModel: shared.ChangeOrderStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeStatusFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiChangeStatusJsonRequest extends SpeakeasyBase {
    changeOrderStatusApiModel: shared.ChangeOrderStatusApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

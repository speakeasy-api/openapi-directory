import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiUpdateJsonRequest extends SpeakeasyBase {
    taxUpdateApiModel: shared.TaxUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiUpdateJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

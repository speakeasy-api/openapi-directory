import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxApiUpdateFormRequest extends SpeakeasyBase {
    taxUpdateApiModel: shared.TaxUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiUpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

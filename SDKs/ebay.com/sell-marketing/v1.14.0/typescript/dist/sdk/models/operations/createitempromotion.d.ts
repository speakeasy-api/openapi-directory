import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateItemPromotionSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateItemPromotionResponse extends SpeakeasyBase {
    /**
     * Created
     */
    baseResponse?: shared.BaseResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

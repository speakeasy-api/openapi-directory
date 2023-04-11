import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiUpdateFormRequest extends SpeakeasyBase {
    workTypeUpdateApiModel: shared.WorkTypeUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiUpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

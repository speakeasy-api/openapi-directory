import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiUpdateJsonRequest extends SpeakeasyBase {
    workTypeUpdateApiModel: shared.WorkTypeUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiUpdateJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiUpdateFormRequest extends SpeakeasyBase {
    clientUpdateApiModel: shared.ClientUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiUpdateFormResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

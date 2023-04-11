import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiUpdateJsonRequest extends SpeakeasyBase {
    clientUpdateApiModel: shared.ClientUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiUpdateJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

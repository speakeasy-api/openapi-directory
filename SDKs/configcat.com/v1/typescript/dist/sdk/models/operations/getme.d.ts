import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    meModel?: shared.MeModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

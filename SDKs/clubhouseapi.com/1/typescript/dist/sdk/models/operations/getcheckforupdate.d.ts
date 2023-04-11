import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCheckForUpdateRequest extends SpeakeasyBase {
    isTestflight?: number;
}
export declare class GetCheckForUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

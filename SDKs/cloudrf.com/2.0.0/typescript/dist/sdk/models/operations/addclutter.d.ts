import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddClutterSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class AddClutterRequestBody extends SpeakeasyBase {
    features?: shared.Feature[];
    name?: string;
    type?: string;
}
export declare class AddClutterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

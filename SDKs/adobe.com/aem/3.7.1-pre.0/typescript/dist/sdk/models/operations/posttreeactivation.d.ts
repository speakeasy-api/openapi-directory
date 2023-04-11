import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostTreeActivationRequest extends SpeakeasyBase {
    cmd: string;
    ignoredeactivated: boolean;
    onlymodified: boolean;
    path: string;
}
export declare class PostTreeActivationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

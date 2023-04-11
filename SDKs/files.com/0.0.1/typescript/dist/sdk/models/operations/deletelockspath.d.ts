import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLocksPathRequest extends SpeakeasyBase {
    /**
     * Path
     */
    path: string;
    /**
     * Lock token
     */
    token: string;
}
export declare class DeleteLocksPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

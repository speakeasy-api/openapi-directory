import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLivePlaysRequest extends SpeakeasyBase {
    /**
     * Game id
     */
    id: number;
}
export declare class GetLivePlaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    livePlayByPlay?: shared.LivePlayByPlay;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

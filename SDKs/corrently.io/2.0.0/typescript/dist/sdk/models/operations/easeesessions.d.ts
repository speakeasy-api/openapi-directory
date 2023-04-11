import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EaseeSessionsRequest extends SpeakeasyBase {
    /**
     * Password as used on easy.cloud
     */
    password?: string;
    /**
     * Username as used on easy.cloud
     */
    username?: string;
}
export declare class EaseeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    easeeChargers?: shared.EaseeCharger[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetGameRegionUsingPOSTRequest extends SpeakeasyBase {
    /**
     * gameApiKey
     */
    gameApiKey: string;
    /**
     * regionCode
     */
    regionCode: string;
}
export declare class SetGameRegionUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    regionResult?: shared.RegionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

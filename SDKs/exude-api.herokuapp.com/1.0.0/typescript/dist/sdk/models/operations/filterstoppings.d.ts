import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FilterStoppingsRequest extends SpeakeasyBase {
    /**
     * Filter the stopping words from the provided input data or links
     */
    exudeBean: shared.ExudeBean;
    /**
     * provide the type of filtering required stopping/swear
     */
    type: string;
}
export declare class FilterStoppingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Exude response
     */
    exudeResponseBean?: shared.ExudeResponseBean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

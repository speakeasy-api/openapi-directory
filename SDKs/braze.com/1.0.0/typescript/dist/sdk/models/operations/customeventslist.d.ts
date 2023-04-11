import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomEventsListRequest extends SpeakeasyBase {
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * The page of event names to return, defaults to 0 (returns the first set of up to 250)
     */
    page?: string;
}
export declare class CustomEventsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

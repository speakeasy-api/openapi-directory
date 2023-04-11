import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGetEventsRequest extends SpeakeasyBase {
    isFiltered?: boolean;
    page?: number;
    pageSize?: number;
}
export declare class GetGetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatapointsIdRequest extends SpeakeasyBase {
    /**
     * The id of the datapoint
     */
    id: number;
}
export declare class GetDatapointsIdResponse extends SpeakeasyBase {
    apiCoreDtoDatapointsDatapoint?: shared.ApiCoreDtoDatapointsDatapoint;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

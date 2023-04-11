import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataPointsPostRequest extends SpeakeasyBase {
    /**
     * The body of the datapoint
     */
    apiCoreDtoDatapointsDatapoint: shared.ApiCoreDtoDatapointsDatapoint;
    /**
     * The id of the datapoint
     */
    id: number;
}
export declare class DataPointsPostResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsPutDatapointRequest extends SpeakeasyBase {
    /**
     * The body of the datapoint
     */
    apiCoreDtoDatapointsDatapoint: shared.ApiCoreDtoDatapointsDatapoint;
    /**
     * The id of the group
     */
    id: number;
}
export declare class GroupsPutDatapointResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetargetingGetRequest extends SpeakeasyBase {
    /**
     * Maximum elements to retrieve. Default to 20 if not specified.
     */
    limit?: number;
    /**
     * Where to start when retrieving elements. Default is 0 if not specified.
     */
    offset?: number;
}
export declare class RetargetingGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

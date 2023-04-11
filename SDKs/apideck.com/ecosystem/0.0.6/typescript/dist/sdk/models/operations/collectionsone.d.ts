import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionsOneRequest extends SpeakeasyBase {
    ecosystemId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
}
export declare class CollectionsOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Collection
     */
    getCollectionResponse?: shared.GetCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

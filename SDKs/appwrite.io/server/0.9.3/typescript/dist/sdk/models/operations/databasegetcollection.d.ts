import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatabaseGetCollectionSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class DatabaseGetCollectionRequest extends SpeakeasyBase {
    /**
     * Collection unique ID.
     */
    collectionId: string;
}
export declare class DatabaseGetCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Collection
     */
    collection?: shared.Collection;
}

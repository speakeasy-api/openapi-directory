import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DatabaseDeleteCollectionSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class DatabaseDeleteCollectionRequest extends SpeakeasyBase {
    /**
     * Collection unique ID.
     */
    collectionId: string;
}
export declare class DatabaseDeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

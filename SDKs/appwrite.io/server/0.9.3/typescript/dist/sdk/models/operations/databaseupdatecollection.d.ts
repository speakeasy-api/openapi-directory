import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatabaseUpdateCollectionSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class DatabaseUpdateCollectionRequestBody extends SpeakeasyBase {
    /**
     * Collection name. Max length: 128 chars.
     */
    name: string;
    /**
     * An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    read?: string[];
    /**
     * Array of [rule objects](/docs/rules). Each rule define a collection field name, data type and validation.
     */
    rules?: string[];
    /**
     * An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    write?: string[];
}
export declare class DatabaseUpdateCollectionRequest extends SpeakeasyBase {
    requestBody?: DatabaseUpdateCollectionRequestBody;
    /**
     * Collection unique ID.
     */
    collectionId: string;
}
export declare class DatabaseUpdateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Collection
     */
    collection?: shared.Collection;
}

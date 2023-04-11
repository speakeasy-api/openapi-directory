import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Collection
 */
export declare class GetCollectionResponse extends SpeakeasyBase {
    data: Collection;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}

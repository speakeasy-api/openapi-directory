import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Collections
 */
export declare class GetCollectionsResponse extends SpeakeasyBase {
    data: Collection[];
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}

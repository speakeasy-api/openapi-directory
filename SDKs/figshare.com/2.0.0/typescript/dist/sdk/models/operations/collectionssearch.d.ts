import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionsSearchRequest extends SpeakeasyBase {
    request?: shared.CollectionSearch;
}
export declare class CollectionsSearchResponse extends SpeakeasyBase {
    collections?: shared.Collection[];
    contentType: string;
    statusCode: number;
}

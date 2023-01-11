import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoresHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStoresRequest extends SpeakeasyBase {
    headers: GetStoresHeaders;
}
export declare class GetStoresResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    storeList?: shared.StoreList;
}

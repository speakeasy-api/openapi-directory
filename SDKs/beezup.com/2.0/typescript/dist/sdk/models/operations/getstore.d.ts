import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStorePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStoreRequest extends SpeakeasyBase {
    pathParams: GetStorePathParams;
    headers: GetStoreHeaders;
}
export declare class GetStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    store?: shared.Store;
}

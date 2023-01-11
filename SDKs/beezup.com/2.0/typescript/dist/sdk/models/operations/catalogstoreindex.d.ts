import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogStoreIndexPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogStoreIndexRequest extends SpeakeasyBase {
    pathParams: CatalogStoreIndexPathParams;
}
export declare class CatalogStoreIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    catalogStoreIndex?: shared.CatalogStoreIndex;
}

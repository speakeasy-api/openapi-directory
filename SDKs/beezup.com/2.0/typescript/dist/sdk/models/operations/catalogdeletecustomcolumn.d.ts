import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogDeleteCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogDeleteCustomColumnRequest extends SpeakeasyBase {
    pathParams: CatalogDeleteCustomColumnPathParams;
}
export declare class CatalogDeleteCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

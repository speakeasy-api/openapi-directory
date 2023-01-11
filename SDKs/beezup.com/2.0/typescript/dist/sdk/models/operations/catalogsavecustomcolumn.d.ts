import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogSaveCustomColumnPathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogSaveCustomColumnRequest extends SpeakeasyBase {
    pathParams: CatalogSaveCustomColumnPathParams;
    request: shared.CreateCustomColumnRequest;
}
export declare class CatalogSaveCustomColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}

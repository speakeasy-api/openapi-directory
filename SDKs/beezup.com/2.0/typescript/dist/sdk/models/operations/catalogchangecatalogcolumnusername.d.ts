import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogChangeCatalogColumnUserNamePathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogChangeCatalogColumnUserNameRequest extends SpeakeasyBase {
    pathParams: CatalogChangeCatalogColumnUserNamePathParams;
    request: shared.ChangeUserColumnNameRequest;
}
export declare class CatalogChangeCatalogColumnUserNameResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}

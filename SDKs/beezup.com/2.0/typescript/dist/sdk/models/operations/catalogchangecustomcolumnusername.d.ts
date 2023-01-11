import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogChangeCustomColumnUserNamePathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogChangeCustomColumnUserNameRequest extends SpeakeasyBase {
    pathParams: CatalogChangeCustomColumnUserNamePathParams;
    request: shared.ChangeUserColumnNameRequest;
}
export declare class CatalogChangeCustomColumnUserNameResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}

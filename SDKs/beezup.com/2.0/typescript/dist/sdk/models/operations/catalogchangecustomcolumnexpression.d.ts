import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogChangeCustomColumnExpressionPathParams extends SpeakeasyBase {
    columnId: string;
    storeId: string;
}
export declare class CatalogChangeCustomColumnExpressionRequest extends SpeakeasyBase {
    pathParams: CatalogChangeCustomColumnExpressionPathParams;
    request: shared.ChangeCustomColumnExpressionRequest;
}
export declare class CatalogChangeCustomColumnExpressionResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}

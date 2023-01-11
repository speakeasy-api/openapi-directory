import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationMapCatalogColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationMapCatalogColumnRequest extends SpeakeasyBase {
    pathParams: ImportationMapCatalogColumnPathParams;
    request: shared.MapBeezUpColumnRequest;
}
export declare class ImportationMapCatalogColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

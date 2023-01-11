import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationUnmapCatalogColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationUnmapCatalogColumnRequest extends SpeakeasyBase {
    pathParams: ImportationUnmapCatalogColumnPathParams;
}
export declare class ImportationUnmapCatalogColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

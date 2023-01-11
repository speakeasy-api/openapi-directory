import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationConfigureCatalogColumnPathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    storeId: string;
}
export declare class ImportationConfigureCatalogColumnRequest extends SpeakeasyBase {
    pathParams: ImportationConfigureCatalogColumnPathParams;
    request: shared.ConfigureCatalogColumnCatalogRequest;
}
export declare class ImportationConfigureCatalogColumnResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

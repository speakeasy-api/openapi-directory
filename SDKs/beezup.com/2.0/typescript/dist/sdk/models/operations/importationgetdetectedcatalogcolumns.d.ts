import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetDetectedCatalogColumnsPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationGetDetectedCatalogColumnsRequest extends SpeakeasyBase {
    pathParams: ImportationGetDetectedCatalogColumnsPathParams;
}
export declare class ImportationGetDetectedCatalogColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    detectedCatalogColumnList?: shared.DetectedCatalogColumnList;
}

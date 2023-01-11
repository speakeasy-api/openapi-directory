import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationConfigureRemainingCatalogColumnsPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationConfigureRemainingCatalogColumnsRequest extends SpeakeasyBase {
    pathParams: ImportationConfigureRemainingCatalogColumnsPathParams;
}
export declare class ImportationConfigureRemainingCatalogColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

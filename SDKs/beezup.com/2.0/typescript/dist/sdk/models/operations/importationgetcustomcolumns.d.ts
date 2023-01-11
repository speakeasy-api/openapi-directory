import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetCustomColumnsPathParams extends SpeakeasyBase {
    executionId: string;
    storeId: string;
}
export declare class ImportationGetCustomColumnsRequest extends SpeakeasyBase {
    pathParams: ImportationGetCustomColumnsPathParams;
}
export declare class ImportationGetCustomColumnsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importationCustomColumnList?: shared.ImportationCustomColumnList;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetReportingsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class ImportationGetReportingsRequest extends SpeakeasyBase {
    pathParams: ImportationGetReportingsPathParams;
}
export declare class ImportationGetReportingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    importationsResponse?: shared.ImportationsResponse;
}

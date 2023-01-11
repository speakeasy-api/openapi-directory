import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveReportFilterPathParams extends SpeakeasyBase {
    reportFilterId: string;
    storeId: string;
}
export declare class SaveReportFilterRequest extends SpeakeasyBase {
    pathParams: SaveReportFilterPathParams;
    request: shared.SaveReportFilterRequest;
}
export declare class SaveReportFilterResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

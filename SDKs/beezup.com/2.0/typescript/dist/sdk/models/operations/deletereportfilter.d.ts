import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportFilterPathParams extends SpeakeasyBase {
    reportFilterId: string;
    storeId: string;
}
export declare class DeleteReportFilterRequest extends SpeakeasyBase {
    pathParams: DeleteReportFilterPathParams;
}
export declare class DeleteReportFilterResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

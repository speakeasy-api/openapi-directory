import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportOrdersRequest extends SpeakeasyBase {
    request: shared.ExportOrderListRequest;
}
export declare class ExportOrdersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}

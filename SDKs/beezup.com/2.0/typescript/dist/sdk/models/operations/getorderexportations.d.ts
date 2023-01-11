import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderExportationsQueryParams extends SpeakeasyBase {
    pageNumber: number;
    pageSize: number;
    storeId: string;
}
export declare class GetOrderExportationsHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetOrderExportationsRequest extends SpeakeasyBase {
    queryParams: GetOrderExportationsQueryParams;
    headers: GetOrderExportationsHeaders;
}
export declare class GetOrderExportationsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    orderExportations?: shared.OrderExportations;
}

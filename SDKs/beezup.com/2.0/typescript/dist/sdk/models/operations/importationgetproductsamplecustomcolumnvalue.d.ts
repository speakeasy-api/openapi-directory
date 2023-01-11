import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetProductSampleCustomColumnValuePathParams extends SpeakeasyBase {
    columnId: string;
    executionId: string;
    productSampleIndex: number;
    storeId: string;
}
export declare class ImportationGetProductSampleCustomColumnValueRequest extends SpeakeasyBase {
    pathParams: ImportationGetProductSampleCustomColumnValuePathParams;
}
export declare class ImportationGetProductSampleCustomColumnValueResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    importationGetProductSampleCustomColumnValue200ApplicationJSONString?: string;
    statusCode: number;
}

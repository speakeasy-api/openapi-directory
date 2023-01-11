import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportationGetProductSamplePathParams extends SpeakeasyBase {
    executionId: string;
    productSampleIndex: number;
    storeId: string;
}
export declare class ImportationGetProductSampleRequest extends SpeakeasyBase {
    pathParams: ImportationGetProductSamplePathParams;
}
export declare class ImportationGetProductSampleResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    productSample?: shared.ProductSample;
}

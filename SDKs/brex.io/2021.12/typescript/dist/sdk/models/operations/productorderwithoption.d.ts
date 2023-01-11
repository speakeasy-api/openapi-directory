import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductOrderWithOptionPathParams extends SpeakeasyBase {
    option: string;
    sku: string;
    subjectId: string;
}
export declare class ProductOrderWithOptionSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductOrderWithOptionRequest extends SpeakeasyBase {
    pathParams: ProductOrderWithOptionPathParams;
    security: ProductOrderWithOptionSecurity;
}
export declare class ProductOrderWithOptionResponse extends SpeakeasyBase {
    contentType: string;
    productOrderWithOption200ApplicationJSONAny?: any;
    productOrderWithOptionDefaultApplicationJSONAny?: any;
    statusCode: number;
}

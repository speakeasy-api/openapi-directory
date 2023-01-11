import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductStatusPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class ProductStatusSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class ProductStatusRequest extends SpeakeasyBase {
    pathParams: ProductStatusPathParams;
    security: ProductStatusSecurity;
}
export declare class ProductStatusResponse extends SpeakeasyBase {
    contentType: string;
    productStatus200ApplicationJSONAny?: any;
    productStatusDefaultApplicationJSONAny?: any;
    statusCode: number;
}

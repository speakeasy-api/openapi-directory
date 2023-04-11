import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFoodBrandedBarcodePhpSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetFoodBrandedBarcodePhpRequest extends SpeakeasyBase {
    /**
     * #### UPC/EAN barcode
     *
     * @remarks
     *
     * **Example**
     * > ```&code=0842234000988```
     *
     */
    code: string;
}
export declare class GetFoodBrandedBarcodePhpResponse extends SpeakeasyBase {
    /**
     * **Valid** - Will return an object containing any matching foods.
     *
     * @remarks
     *
     */
    brandedFoodObject?: shared.BrandedFoodObject;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

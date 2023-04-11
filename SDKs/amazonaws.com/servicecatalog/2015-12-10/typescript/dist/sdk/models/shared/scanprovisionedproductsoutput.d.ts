import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductDetail } from "./provisionedproductdetail";
/**
 * Success
 */
export declare class ScanProvisionedProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProducts?: ProvisionedProductDetail[];
}

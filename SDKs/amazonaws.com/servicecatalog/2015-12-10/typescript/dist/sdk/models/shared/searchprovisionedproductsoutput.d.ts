import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductAttribute } from "./provisionedproductattribute";
/**
 * Success
 */
export declare class SearchProvisionedProductsOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisionedProducts?: ProvisionedProductAttribute[];
    totalResultsCount?: number;
}

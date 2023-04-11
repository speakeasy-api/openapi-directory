import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of Product to create.
 */
export declare class ProductDto extends SpeakeasyBase {
    details?: string[];
    grossUnitPrice?: boolean;
    hasDefaultVatRate?: boolean;
    id?: number;
    productTypeId?: number;
    stockCode?: string;
    timestamp?: string;
    unitPrice?: number;
    vatAnalysisTypeId?: number;
    vatRateId?: number;
}

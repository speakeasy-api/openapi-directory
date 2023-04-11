import { SpeakeasyBase } from "../../../internal/utils";
import { VatTypeDto } from "./vattypedto";
/**
 * OK
 */
export declare class PageResultVatTypeDto extends SpeakeasyBase {
    count?: number;
    items?: VatTypeDto[];
    nextPageLink?: string;
}

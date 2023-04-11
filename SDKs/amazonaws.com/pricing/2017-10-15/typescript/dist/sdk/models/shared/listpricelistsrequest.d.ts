import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPriceListsRequest extends SpeakeasyBase {
    currencyCode: string;
    effectiveDate: Date;
    maxResults?: number;
    nextToken?: string;
    regionCode?: string;
    serviceCode: string;
}

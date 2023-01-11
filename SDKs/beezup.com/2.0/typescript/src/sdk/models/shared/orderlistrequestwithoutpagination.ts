import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateSearchTypeEnum } from "./datesearchtypeenum";



export class OrderListRequestWithoutPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderStatuses" })
  beezUPOrderStatuses?: string[];

  @SpeakeasyMetadata({ data: "json, name=beginPeriodUtcDate" })
  beginPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=dateSearchType" })
  dateSearchType?: DateSearchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=endPeriodUtcDate" })
  endPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceAvailabilityType" })
  invoiceAvailabilityType?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCodes" })
  marketplaceBusinessCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=marketplaceOrderIds" })
  marketplaceOrderIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCodes" })
  marketplaceTechnicalCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=orderMerchantInfoSynchronizationStatus" })
  orderMerchantInfoSynchronizationStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Name" })
  orderBuyerName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantOrderIds" })
  orderMerchantOrderIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=storeIds" })
  storeIds?: string[];
}

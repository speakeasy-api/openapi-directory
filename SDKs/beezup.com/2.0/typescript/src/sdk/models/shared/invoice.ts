import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoicePaymentStatusEnum } from "./invoicepaymentstatusenum";



export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=amountToBePaid" })
  amountToBePaid: number;

  @SpeakeasyMetadata({ data: "json, name=contractId" })
  contractId: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceDate" })
  invoiceDate: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceUrl" })
  invoiceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentStatus" })
  paymentStatus: InvoicePaymentStatusEnum;
}

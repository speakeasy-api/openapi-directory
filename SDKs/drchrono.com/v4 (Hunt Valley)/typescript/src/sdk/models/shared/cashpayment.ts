import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CashPaymentPaymentMethodEnum {
    Cash = "CASH",
    Chck = "CHCK",
    Dbit = "DBIT",
    Crdt = "CRDT",
    Amex = "AMEX",
    Visa = "VISA",
    Mstr = "MSTR",
    Disc = "DISC",
    Sqr1 = "SQR1",
    Sqre = "SQRE",
    Ptpa = "PTPA",
    Onpt = "ONPT",
    Othr = "OTHR"
}

export enum CashPaymentPaymentTransactionTypeEnum {
    Unknown = "",
    Ref = "REF",
    Cor = "COR",
    Copay = "COPAY",
    Coinsr = "COINSR",
    Othr = "OTHR"
}


export class CashPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=line_item" })
  lineItem?: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: CashPaymentPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_transaction_type" })
  paymentTransactionType?: CashPaymentPaymentTransactionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=received_date" })
  receivedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=trace_number" })
  traceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

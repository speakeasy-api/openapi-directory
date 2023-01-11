import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CashPaymentLogActionEnum {
    C = "C",
    U = "U",
    D = "D",
    F = "F",
    A = "A"
}

export enum CashPaymentLogPaymentMethodEnum {
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


export class CashPaymentLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: CashPaymentLogActionEnum;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: CashPaymentLogPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

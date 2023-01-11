import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EobObjectPaymentMethodEnum {
    Unknown = "",
    Ach = "ACH",
    Bopccp = "BOPCCP",
    Bopctx = "BOPCTX",
    Chk = "CHK",
    Fwt = "FWT",
    Vpay = "VPAY",
    Non = "NON"
}


export class EobObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check_date" })
  checkDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deposit_date" })
  depositDate?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=insurance_payer_id" })
  insurancePayerId: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_payer_name" })
  insurancePayerName: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_payer_trace_number" })
  insurancePayerTraceNumber: string;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: EobObjectPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scanned_eob" })
  scannedEob?: string;

  @SpeakeasyMetadata({ data: "json, name=total_paid" })
  totalPaid?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PosPayment } from "./pospayment";


export class GetPosPaymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: PosPayment;

  @Metadata({ data: "json, name=operation" })
  operation: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}

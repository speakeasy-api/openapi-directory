import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomerBalance200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_balance" })
  accountBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=generated_at" })
  generatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=month_to_date_balance" })
  monthToDateBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=month_to_date_usage" })
  monthToDateUsage?: string;
}


export class GetCustomerBalance401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetCustomerBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomerBalance200ApplicationJSONObject?: GetCustomerBalance200ApplicationJson;

  @SpeakeasyMetadata()
  getCustomerBalance401ApplicationJSONObject?: GetCustomerBalance401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

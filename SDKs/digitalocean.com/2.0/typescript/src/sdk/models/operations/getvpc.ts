import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVpcPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vpc_id" })
  vpcId: string;
}


export class GetVpc200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}


export class GetVpc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetVpcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVpcPathParams;
}


export class GetVpcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVpc200ApplicationJSONObject?: GetVpc200ApplicationJson;

  @SpeakeasyMetadata()
  getVpc401ApplicationJSONObject?: GetVpc401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

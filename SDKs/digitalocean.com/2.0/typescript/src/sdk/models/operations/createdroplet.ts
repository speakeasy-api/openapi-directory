import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDropletRequestBodySingleDropletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups" })
  backups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_networking" })
  privateNetworking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: any[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=user_data" })
  userData?: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=with_droplet_agent" })
  withDropletAgent?: boolean;
}


export class CreateDropletRequestBodyMultipleDropletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups" })
  backups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: any;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names: string[];

  @SpeakeasyMetadata({ data: "json, name=private_networking" })
  privateNetworking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: any[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=user_data" })
  userData?: string;

  @SpeakeasyMetadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=with_droplet_agent" })
  withDropletAgent?: boolean;
}


export class CreateDroplet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateDropletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class CreateDropletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDroplet202ApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  createDroplet401ApplicationJSONObject?: CreateDroplet401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

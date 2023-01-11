import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNewVolumeRequestBody1Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filesystem_label" })
  filesystemLabel?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filesystem_type" })
  filesystemType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateNewVolumeRequestBody2Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filesystem_label" })
  filesystemLabel?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filesystem_type" })
  filesystemType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateNewVolume401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateNewVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateNewVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNewVolume201ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createNewVolume401ApplicationJSONObject?: CreateNewVolume401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

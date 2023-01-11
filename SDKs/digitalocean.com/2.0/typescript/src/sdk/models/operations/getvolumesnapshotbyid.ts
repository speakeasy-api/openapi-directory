import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVolumeSnapshotByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshot_id" })
  snapshotId: any;
}


export class GetVolumeSnapshotById401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetVolumeSnapshotByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumeSnapshotByIdPathParams;
}


export class GetVolumeSnapshotByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVolumeSnapshotById200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getVolumeSnapshotById401ApplicationJSONObject?: GetVolumeSnapshotById401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

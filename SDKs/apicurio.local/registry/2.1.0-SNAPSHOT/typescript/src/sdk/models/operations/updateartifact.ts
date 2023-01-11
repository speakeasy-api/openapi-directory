import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateArtifactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-Description" })
  xRegistryDescription?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-Description-Encoded" })
  xRegistryDescriptionEncoded?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-Name" })
  xRegistryName?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-Name-Encoded" })
  xRegistryNameEncoded?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-Version" })
  xRegistryVersion?: string;
}


export class UpdateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateArtifactPathParams;

  @SpeakeasyMetadata()
  headers: UpdateArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class UpdateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

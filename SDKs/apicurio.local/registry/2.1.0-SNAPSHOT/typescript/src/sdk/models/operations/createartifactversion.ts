import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateArtifactVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class CreateArtifactVersionHeaders extends SpeakeasyBase {
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


export class CreateArtifactVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateArtifactVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateArtifactVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class CreateArtifactVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  ruleViolationError?: shared.RuleViolationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMetaData?: shared.VersionMetaData;
}

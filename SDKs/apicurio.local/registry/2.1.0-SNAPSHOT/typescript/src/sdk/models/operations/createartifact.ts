import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateArtifactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class CreateArtifactQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canonical" })
  canonical?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifExists" })
  ifExists?: shared.IfExistsEnum;
}


export class CreateArtifactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactId" })
  xRegistryArtifactId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Registry-ArtifactType" })
  xRegistryArtifactType?: shared.ArtifactTypeEnum;

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


export class CreateArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateArtifactPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateArtifactQueryParams;

  @SpeakeasyMetadata()
  headers: CreateArtifactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class CreateArtifactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactMetaData?: shared.ArtifactMetaData;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  ruleViolationError?: shared.RuleViolationError;

  @SpeakeasyMetadata()
  statusCode: number;
}

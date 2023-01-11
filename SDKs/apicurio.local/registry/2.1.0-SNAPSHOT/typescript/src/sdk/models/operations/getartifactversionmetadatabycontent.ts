import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetArtifactVersionMetaDataByContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class GetArtifactVersionMetaDataByContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canonical" })
  canonical?: boolean;
}


export class GetArtifactVersionMetaDataByContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetArtifactVersionMetaDataByContentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetArtifactVersionMetaDataByContentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request: Uint8Array;
}


export class GetArtifactVersionMetaDataByContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  versionMetaData?: shared.VersionMetaData;
}

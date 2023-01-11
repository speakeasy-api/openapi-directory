import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRoleMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=principalId" })
  principalId: string;
}


export class GetRoleMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRoleMappingPathParams;
}


export class GetRoleMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  roleMapping?: shared.RoleMapping;

  @SpeakeasyMetadata()
  statusCode: number;
}

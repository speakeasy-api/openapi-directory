import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRoleMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=principalId" })
  principalId: string;
}


export class DeleteRoleMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRoleMappingPathParams;
}


export class DeleteRoleMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}

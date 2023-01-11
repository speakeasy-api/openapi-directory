import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OptimiseByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: shared.OptimisationActionNameGeneralParametersEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=catalogCategoryId" })
  catalogCategoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class OptimiseByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptimiseByCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string[];
}


export class OptimiseByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

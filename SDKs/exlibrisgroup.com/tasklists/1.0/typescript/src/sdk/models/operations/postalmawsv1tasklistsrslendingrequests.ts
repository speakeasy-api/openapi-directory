import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlmawsV1TaskListsRsLendingRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=library" })
  library?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=op" })
  op?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner" })
  partner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printed" })
  printed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reported" })
  reported?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requested_format" })
  requestedFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supplied_format" })
  suppliedFormat?: string;
}


export class PostAlmawsV1TaskListsRsLendingRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlmawsV1TaskListsRsLendingRequestsQueryParams;
}


export class PostAlmawsV1TaskListsRsLendingRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems;
}

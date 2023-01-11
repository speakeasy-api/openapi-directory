import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SortOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sortOptionResponse?: shared.SortOptionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

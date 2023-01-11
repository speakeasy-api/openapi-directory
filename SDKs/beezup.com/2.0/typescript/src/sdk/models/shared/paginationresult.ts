import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationResultLinks } from "./paginationresultlinks";



export class PaginationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryCount" })
  entryCount: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: PaginationResultLinks;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount: number;

  @SpeakeasyMetadata({ data: "json, name=totalEntryCount" })
  totalEntryCount: number;
}

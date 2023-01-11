import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonPaginationResultLinks } from "./beezupcommonpaginationresultlinks";



export class BeezUpCommonPaginationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryCount" })
  entryCount: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: BeezUpCommonPaginationResultLinks;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount: number;

  @SpeakeasyMetadata({ data: "json, name=totalEntryCount" })
  totalEntryCount: number;
}

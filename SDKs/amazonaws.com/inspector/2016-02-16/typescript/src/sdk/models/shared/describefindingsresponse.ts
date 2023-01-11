import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { Finding } from "./finding";



export class DescribeFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Record<string, FailedItemDetails>;

  @SpeakeasyMetadata({ data: "json, name=findings", elemType: Finding })
  findings: Finding[];
}

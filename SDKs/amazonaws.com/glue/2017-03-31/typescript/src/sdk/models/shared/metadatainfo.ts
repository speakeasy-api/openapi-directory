import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OtherMetadataValueListItem } from "./othermetadatavaluelistitem";



export class MetadataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;

  @SpeakeasyMetadata({ data: "json, name=OtherMetadataValueList", elemType: OtherMetadataValueListItem })
  otherMetadataValueList?: OtherMetadataValueListItem[];
}

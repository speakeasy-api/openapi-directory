import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";



export class SharedLinkTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileTypeEnum;
}

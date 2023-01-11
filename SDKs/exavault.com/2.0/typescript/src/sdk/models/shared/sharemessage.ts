import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShareMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=shareId" })
  shareId?: number;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ShareRecipientTypeEnum {
    Owner = "owner",
    Direct = "direct"
}


export class ShareRecipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=received" })
  received?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shareId" })
  shareId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShareRecipientTypeEnum;
}

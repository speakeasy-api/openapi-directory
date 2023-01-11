import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentPublicUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=public_url" })
  publicUrl?: string;
}

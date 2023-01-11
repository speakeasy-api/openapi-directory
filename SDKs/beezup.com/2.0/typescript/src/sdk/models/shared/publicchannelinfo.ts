import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicChannelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homeUrl" })
  homeUrl: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sectors" })
  sectors?: string[];

  @SpeakeasyMetadata({ data: "json, name=types" })
  types: string[];
}

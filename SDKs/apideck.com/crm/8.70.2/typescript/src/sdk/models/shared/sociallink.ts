import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SocialLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDjangoRestToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  djangoRestToken: SchemeDjangoRestToken;
}

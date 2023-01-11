import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Update } from "./update";



export class AssociateIdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Update;
}

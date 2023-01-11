import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cli" })
  cli?: number;

  @SpeakeasyMetadata({ data: "json, name=ked" })
  ked?: number;

  @SpeakeasyMetadata({ data: "json, name=pe" })
  pe?: number;

  @SpeakeasyMetadata({ data: "json, name=pm" })
  pm?: number;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: number;

  @SpeakeasyMetadata({ data: "json, name=ter" })
  ter?: number;
}

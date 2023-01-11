import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Criterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: string[];

  @SpeakeasyMetadata({ data: "json, name=eq" })
  eq?: string[];

  @SpeakeasyMetadata({ data: "json, name=exists" })
  exists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=neq" })
  neq?: string[];
}

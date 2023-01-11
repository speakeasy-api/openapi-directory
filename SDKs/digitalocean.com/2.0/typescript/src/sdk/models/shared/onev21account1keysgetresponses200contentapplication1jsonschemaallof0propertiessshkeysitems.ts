import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;
}

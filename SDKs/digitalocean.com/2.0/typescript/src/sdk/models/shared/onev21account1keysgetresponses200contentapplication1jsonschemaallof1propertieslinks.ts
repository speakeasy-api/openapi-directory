import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}

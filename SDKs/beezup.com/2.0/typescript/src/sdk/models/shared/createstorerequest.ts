import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateStoreRequest
/** 
 * The request to create a store. The store identifier is optional, if null it will be automatically computed.
**/
export class CreateStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIsoCodeAlpha3" })
  countryIsoCodeAlpha3: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sectors" })
  sectors: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

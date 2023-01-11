import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet
/** 
 * An object containing information about a resource scheduled for deletion.
**/
export class Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destroyed_at" })
  destroyedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

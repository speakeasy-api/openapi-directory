import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyDayEnum {
    Any = "any",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}


// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput
/** 
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyDayEnum;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}

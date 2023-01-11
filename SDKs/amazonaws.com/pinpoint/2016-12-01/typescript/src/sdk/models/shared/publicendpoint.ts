import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";



// PublicEndpoint
/** 
 * Specifies the properties and attributes of an endpoint that's associated with an event.
**/
export class PublicEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Demographic" })
  demographic?: EndpointDemographic;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: EndpointLocation;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=OptOut" })
  optOut?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: EndpointUser;
}

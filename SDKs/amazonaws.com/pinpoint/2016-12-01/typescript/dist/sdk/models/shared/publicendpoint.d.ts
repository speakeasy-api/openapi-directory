import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { EndpointDemographic } from "./endpointdemographic";
import { EndpointLocation } from "./endpointlocation";
import { EndpointUser } from "./endpointuser";
/**
 * Specifies the properties and attributes of an endpoint that's associated with an event.
 */
export declare class PublicEndpoint extends SpeakeasyBase {
    address?: string;
    attributes?: Record<string, string[]>;
    channelType?: ChannelTypeEnum;
    demographic?: EndpointDemographic;
    effectiveDate?: string;
    endpointStatus?: string;
    location?: EndpointLocation;
    metrics?: Record<string, number>;
    optOut?: string;
    requestId?: string;
    user?: EndpointUser;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";
/**
 * Provides the configuration information for the endpoint for your Amazon Kendra experience.
 */
export declare class ExperienceEndpoint extends SpeakeasyBase {
    endpoint?: string;
    endpointType?: EndpointTypeEnum;
}

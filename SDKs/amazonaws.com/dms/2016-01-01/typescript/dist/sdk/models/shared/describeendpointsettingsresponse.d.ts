import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointSetting } from "./endpointsetting";
/**
 * Success
 */
export declare class DescribeEndpointSettingsResponse extends SpeakeasyBase {
    endpointSettings?: EndpointSetting[];
    marker?: string;
}

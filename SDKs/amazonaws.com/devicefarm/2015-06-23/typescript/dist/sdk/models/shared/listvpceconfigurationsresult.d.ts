import { SpeakeasyBase } from "../../../internal/utils";
import { VPCEConfiguration } from "./vpceconfiguration";
/**
 * Success
 */
export declare class ListVPCEConfigurationsResult extends SpeakeasyBase {
    nextToken?: string;
    vpceConfigurations?: VPCEConfiguration[];
}

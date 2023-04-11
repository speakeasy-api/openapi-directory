import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConfigurationDescription } from "./vpcconfigurationdescription";
/**
 * Success
 */
export declare class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    vpcConfigurationDescription?: VpcConfigurationDescription;
}

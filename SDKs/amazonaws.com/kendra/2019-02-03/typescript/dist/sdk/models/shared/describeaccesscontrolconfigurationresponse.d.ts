import { SpeakeasyBase } from "../../../internal/utils";
import { HierarchicalPrincipal } from "./hierarchicalprincipal";
import { Principal } from "./principal";
/**
 * Success
 */
export declare class DescribeAccessControlConfigurationResponse extends SpeakeasyBase {
    accessControlList?: Principal[];
    description?: string;
    errorMessage?: string;
    hierarchicalAccessControlList?: HierarchicalPrincipal[];
    name: string;
}

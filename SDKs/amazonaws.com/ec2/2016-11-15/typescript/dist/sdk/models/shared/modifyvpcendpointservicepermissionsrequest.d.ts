import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    addAllowedPrincipals?: string[];
    dryRun?: boolean;
    removeAllowedPrincipals?: string[];
    serviceId: string;
}

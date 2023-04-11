import { SpeakeasyBase } from "../../../internal/utils";
import { OidcConfig } from "./oidcconfig";
import { SourceIpConfig } from "./sourceipconfig";
import { WorkforceVpcConfigRequest } from "./workforcevpcconfigrequest";
export declare class UpdateWorkforceRequest extends SpeakeasyBase {
    oidcConfig?: OidcConfig;
    sourceIpConfig?: SourceIpConfig;
    workforceName: string;
    workforceVpcConfig?: WorkforceVpcConfigRequest;
}

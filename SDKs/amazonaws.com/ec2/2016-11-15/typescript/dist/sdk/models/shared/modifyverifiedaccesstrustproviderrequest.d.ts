import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyVerifiedAccessTrustProviderOidcOptions } from "./modifyverifiedaccesstrustprovideroidcoptions";
export declare class ModifyVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    dryRun?: boolean;
    oidcOptions?: ModifyVerifiedAccessTrustProviderOidcOptions;
    verifiedAccessTrustProviderId: string;
}

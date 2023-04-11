import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    verifiedAccessInstanceId: string;
    verifiedAccessTrustProviderId: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    verifiedAccessInstanceId: string;
    verifiedAccessTrustProviderId: string;
}

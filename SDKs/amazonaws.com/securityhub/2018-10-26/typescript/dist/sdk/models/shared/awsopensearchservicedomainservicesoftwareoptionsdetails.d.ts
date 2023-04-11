import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the state of the domain relative to the latest service software.
 */
export declare class AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails extends SpeakeasyBase {
    automatedUpdateDate?: string;
    cancellable?: boolean;
    currentVersion?: string;
    description?: string;
    newVersion?: string;
    optionalDeployment?: boolean;
    updateAvailable?: boolean;
    updateStatus?: string;
}

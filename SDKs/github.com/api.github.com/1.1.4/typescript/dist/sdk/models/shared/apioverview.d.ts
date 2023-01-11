import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiOverviewSshKeyFingerprints extends SpeakeasyBase {
    sha256DSA?: string;
    sha256RSA?: string;
}
/**
 * Api Overview
**/
export declare class ApiOverview extends SpeakeasyBase {
    actions?: string[];
    api?: string[];
    git?: string[];
    hooks?: string[];
    importer?: string[];
    pages?: string[];
    sshKeyFingerprints?: ApiOverviewSshKeyFingerprints;
    verifiablePasswordAuthentication: boolean;
    web?: string[];
}

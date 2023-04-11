import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateValidationRecord } from "./certificatevalidationrecord";
import { CustomDomainAssociationStatusEnum } from "./customdomainassociationstatusenum";
/**
 * Describes a custom domain that's associated with an App Runner service.
 */
export declare class CustomDomain extends SpeakeasyBase {
    certificateValidationRecords?: CertificateValidationRecord[];
    domainName: string;
    enableWWWSubdomain: boolean;
    status: CustomDomainAssociationStatusEnum;
}

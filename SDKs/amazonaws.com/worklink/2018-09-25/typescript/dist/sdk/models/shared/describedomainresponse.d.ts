import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * Success
 */
export declare class DescribeDomainResponse extends SpeakeasyBase {
    acmCertificateArn?: string;
    createdTime?: Date;
    displayName?: string;
    domainName?: string;
    domainStatus?: DomainStatusEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { ContactDetail } from "./contactdetail";
/**
 * The UpdateDomainContact request includes the following elements.
 */
export declare class UpdateDomainContactRequest extends SpeakeasyBase {
    adminContact?: ContactDetail;
    consent?: Consent;
    domainName: string;
    registrantContact?: ContactDetail;
    techContact?: ContactDetail;
}

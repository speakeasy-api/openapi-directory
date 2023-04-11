import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualInput } from "./individual";
import { LegalEntityAssociationInput } from "./legalentityassociation";
import { OrganizationInput } from "./organization";
import { SoleProprietorship } from "./soleproprietorship";
/**
 * The type of legal entity.
 *
 * @remarks
 *
 *  Possible values: **individual**, **organization**, or **soleProprietorship**.
 */
export declare enum LegalEntityInfoRequiredTypeTypeEnum {
    Individual = "individual",
    Organization = "organization",
    SoleProprietorship = "soleProprietorship",
    Trust = "trust",
    UnincorporatedPartnership = "unincorporatedPartnership"
}
export declare class LegalEntityInfoRequiredTypeInput extends SpeakeasyBase {
    /**
     * List of legal entities associated with the current legal entity.
     *
     * @remarks
     * For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
     */
    entityAssociations?: LegalEntityAssociationInput[];
    individual?: IndividualInput;
    organization?: OrganizationInput;
    /**
     * Your reference for the legal entity, maximum 150 characters.
     */
    reference?: string;
    soleProprietorship?: SoleProprietorship;
    /**
     * The type of legal entity.
     *
     * @remarks
     *
     *  Possible values: **individual**, **organization**, or **soleProprietorship**.
     */
    type: LegalEntityInfoRequiredTypeTypeEnum;
}

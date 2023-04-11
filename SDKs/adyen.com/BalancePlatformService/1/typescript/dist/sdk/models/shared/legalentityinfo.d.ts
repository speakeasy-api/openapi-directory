import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualInput } from "./individual";
import { LegalEntityAssociationInput } from "./legalentityassociation";
import { OrganizationInput } from "./organization";
/**
 * The type of legal entity.
 *
 * @remarks
 *
 *  Possible values: **individual** or **organization**
 */
export declare enum LegalEntityInfoTypeEnum {
    Individual = "individual",
    Organization = "organization"
}
export declare class LegalEntityInfoInput extends SpeakeasyBase {
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
    /**
     * The type of legal entity.
     *
     * @remarks
     *
     *  Possible values: **individual** or **organization**
     */
    type?: LegalEntityInfoTypeEnum;
}

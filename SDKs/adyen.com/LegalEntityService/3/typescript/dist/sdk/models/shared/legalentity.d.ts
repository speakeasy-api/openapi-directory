import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityProblem } from "./capabilityproblem";
import { DocumentReference } from "./documentreference";
import { EntityReference } from "./entityreference";
import { Individual } from "./individual";
import { LegalEntityAssociation } from "./legalentityassociation";
import { LegalEntityCapability } from "./legalentitycapability";
import { Organization } from "./organization";
import { SoleProprietorship } from "./soleproprietorship";
import { TransferInstrumentReference } from "./transferinstrumentreference";
/**
 * The type of legal entity.
 *
 * @remarks
 *
 *  Possible values: **individual**, **organization**, or **soleProprietorship**.
 */
export declare enum LegalEntityTypeEnum {
    Individual = "individual",
    Organization = "organization",
    SoleProprietorship = "soleProprietorship",
    Trust = "trust",
    UnincorporatedPartnership = "unincorporatedPartnership"
}
/**
 * OK - the request has succeeded.
 */
export declare class LegalEntity extends SpeakeasyBase {
    /**
     * Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
     */
    capabilities?: Record<string, LegalEntityCapability>;
    /**
     * List of documents uploaded for the legal entity.
     */
    documentDetails?: DocumentReference[];
    /**
     * List of documents uploaded for the legal entity.
     */
    documents?: EntityReference[];
    /**
     * List of legal entities associated with the current legal entity.
     *
     * @remarks
     * For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
     */
    entityAssociations?: LegalEntityAssociation[];
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
    individual?: Individual;
    organization?: Organization;
    /**
     * List of the verification errors from capabilities for the legal entity.
     */
    problems?: CapabilityProblem[];
    /**
     * Your reference for the legal entity, maximum 150 characters.
     */
    reference?: string;
    soleProprietorship?: SoleProprietorship;
    /**
     * List of transfer instruments that the legal entity owns.
     */
    transferInstruments?: TransferInstrumentReference[];
    /**
     * The type of legal entity.
     *
     * @remarks
     *
     *  Possible values: **individual**, **organization**, or **soleProprietorship**.
     */
    type?: LegalEntityTypeEnum;
}

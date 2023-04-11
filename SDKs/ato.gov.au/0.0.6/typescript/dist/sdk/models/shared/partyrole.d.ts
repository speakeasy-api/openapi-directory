import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The party's role type.
 */
export declare enum PartyRolePartyRoleTypeEnum {
    Director = "Director",
    Employee = "Employee",
    Member = "Member",
    Partner = "Partner",
    Trustee = "Trustee"
}
/**
 * The related party's role type.
 */
export declare enum PartyRoleRelatedPartyRoleTypeEnum {
    Association = "Association",
    Company = "Company",
    Employer = "Employer",
    Organisation = "Organisation",
    Partnership = "Partnership",
    Trust = "Trust"
}
/**
 * The relationship type.
 */
export declare enum PartyRoleRelationshipTypeEnum {
    Directorship = "Directorship",
    Employment = "Employment",
    Membership = "Membership",
    Partnership = "Partnership",
    Trusteeship = "Trusteeship"
}
/**
 * The Party Role resource.
 */
export declare class PartyRoleInput extends SpeakeasyBase {
    /**
     * The party's role type.
     */
    partyRoleType?: PartyRolePartyRoleTypeEnum;
    /**
     * The related party's unique identifier.
     */
    relatedPartyId: string;
    /**
     * The related party's role type.
     */
    relatedPartyRoleType?: PartyRoleRelatedPartyRoleTypeEnum;
    /**
     * The relationship type.
     */
    relationshipType: PartyRoleRelationshipTypeEnum;
}
/**
 * The Party Role resource.
 */
export declare class PartyRole extends SpeakeasyBase {
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The party's role type.
     */
    partyRoleType?: PartyRolePartyRoleTypeEnum;
    /**
     * The related party's unique identifier.
     */
    relatedPartyId: string;
    /**
     * The related party's role type.
     */
    relatedPartyRoleType?: PartyRoleRelatedPartyRoleTypeEnum;
    /**
     * The relationship type.
     */
    relationshipType: PartyRoleRelationshipTypeEnum;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}

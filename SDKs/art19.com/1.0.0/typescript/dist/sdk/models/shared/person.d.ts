import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare class PersonAttributes extends SpeakeasyBase {
    /**
     * This will be replaced by the relationship `avatar` in a future update.<br/>
     *
     * @remarks
     * The image ID of an avatar or head shot of the person. Details can be
     * retrieved using the `/images` endpoint.
     *
     */
    avatarId?: string;
    /**
     * The biography of the person without markup.
     */
    biography?: string;
    /**
     * The birthday of the person
     */
    born?: Date;
    createdAt?: Date;
    /**
     * The day of death of the person
     */
    died?: Date;
    /**
     * The first name of the person
     */
    firstName?: string;
    /**
     * The country the person is from
     */
    fromCountry?: string;
    /**
     * The locality or city the person is from
     */
    fromLocality?: string;
    /**
     * The region/state/province the person is from
     */
    fromRegion?: string;
    /**
     * The last name of the person
     */
    lastName?: string;
    /**
     * The public email contact for the person
     */
    publicEmail?: string;
    updatedAt?: Date;
}
/**
 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 *
 * @remarks
 *
 */
export declare class PersonRelationshipsAvatar extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class PersonRelationships extends SpeakeasyBase {
    /**
     * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
     *
     * @remarks
     *
     */
    avatar?: PersonRelationshipsAvatar;
}
export declare class Person extends SpeakeasyBase {
    attributes?: PersonAttributes;
    id?: string;
    relationships?: PersonRelationships;
    /**
     * The type of resource. This is always `people`
     */
    type?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare class PersonAttributes extends SpeakeasyBase {
    avatarId?: string;
    biography?: string;
    born?: Date;
    createdAt?: Date;
    died?: Date;
    firstName?: string;
    fromCountry?: string;
    fromLocality?: string;
    fromRegion?: string;
    lastName?: string;
    publicEmail?: string;
    updatedAt?: Date;
}
/**
 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 *
**/
export declare class PersonRelationshipsAvatar extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class PersonRelationships extends SpeakeasyBase {
    avatar?: PersonRelationshipsAvatar;
}
export declare class Person extends SpeakeasyBase {
    attributes?: PersonAttributes;
    id?: string;
    relationships?: PersonRelationships;
    type?: string;
}

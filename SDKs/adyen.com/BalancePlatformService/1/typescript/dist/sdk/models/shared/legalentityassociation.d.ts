import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the relationship of the legal entity to the current legal entity.
 *
 * @remarks
 *
 * For example, **uboThroughOwnership**, **uboThroughControl**, **signatory**, or **soleProprietorship**.
 */
export declare enum LegalEntityAssociationTypeEnum {
    Signatory = "signatory",
    UboThroughControl = "uboThroughControl",
    UboThroughOwnership = "uboThroughOwnership"
}
export declare class LegalEntityAssociationInput extends SpeakeasyBase {
    /**
     * The individual's job title if the `type` is **uboThroughControl** or **signatory**.
     */
    jobTitle?: string;
    /**
     * The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id).
     */
    legalEntityId: string;
    /**
     * Defines the relationship of the legal entity to the current legal entity.
     *
     * @remarks
     *
     * For example, **uboThroughOwnership**, **uboThroughControl**, **signatory**, or **soleProprietorship**.
     */
    type: LegalEntityAssociationTypeEnum;
}
export declare class LegalEntityAssociation extends SpeakeasyBase {
    /**
     * The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations.
     */
    associatorId?: string;
    /**
     * The legal entity type of associated legal entity.
     *
     * @remarks
     *
     * For example, **organization**, **soleProprietorship** or **individual**.
     */
    entityType?: string;
    /**
     * The individual's job title if the `type` is **uboThroughControl** or **signatory**.
     */
    jobTitle?: string;
    /**
     * The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id).
     */
    legalEntityId: string;
    /**
     * The name of the associated [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id).
     *
     * @remarks
     *
     * - For **individual**, `name.firstName` and `name.lastName`.
     * - For **organization**, `legalName`.
     * - For **soleProprietorship**, `name`.
     */
    name?: string;
    /**
     * Defines the relationship of the legal entity to the current legal entity.
     *
     * @remarks
     *
     * For example, **uboThroughOwnership**, **uboThroughControl**, **signatory**, or **soleProprietorship**.
     */
    type: LegalEntityAssociationTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class OwnerEntity extends SpeakeasyBase {
    /**
     * Unique identifier of the resource that owns the document. For `type` **legalEntity**, this value is the unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). For `type` **bankAccount**, this value is the unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).
     */
    id: string;
    /**
     * Type of resource that owns the document.
     *
     * @remarks
     *
     * Possible values: **legalEntity**, **bankAccount**.
     */
    type: string;
}

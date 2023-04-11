import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetDestinyEntityDefinitionRequest extends SpeakeasyBase {
    /**
     * The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
     */
    entityType: string;
    /**
     * The hash identifier for the specific Entity you want returned.
     */
    hashIdentifier: number;
}
/**
 * Provides common properties for destiny definitions.
 */
export declare class Destiny2GetDestinyEntityDefinition200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * Provides common properties for destiny definitions.
     */
    response?: shared.DestinyDefinitionsDestinyDefinition;
    throttleSeconds?: number;
}
export declare class Destiny2GetDestinyEntityDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityControlDefinition } from "./securitycontroldefinition";
/**
 * Success
 */
export declare class ListSecurityControlDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    securityControlDefinitions: SecurityControlDefinition[];
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a domain recordset entry.
**/
export declare class DomainEntry extends SpeakeasyBase {
    id?: string;
    isAlias?: boolean;
    name?: string;
    options?: Record<string, string>;
    target?: string;
    type?: string;
}

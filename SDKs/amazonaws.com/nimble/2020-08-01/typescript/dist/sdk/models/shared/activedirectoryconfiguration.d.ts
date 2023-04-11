import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";
/**
 * The configuration for a Directory Service for Microsoft Active Directory studio resource.
 */
export declare class ActiveDirectoryConfiguration extends SpeakeasyBase {
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    directoryId?: string;
    organizationalUnitDistinguishedName?: string;
}

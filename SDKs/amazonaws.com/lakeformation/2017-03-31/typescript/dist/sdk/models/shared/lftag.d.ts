import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
 */
export declare class LFTag extends SpeakeasyBase {
    tagKey: string;
    tagValues: string[];
}

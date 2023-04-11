import { SpeakeasyBase } from "../../../internal/utils";
import { ConflictingAliases } from "./conflictingaliases";
/**
 * A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.
 */
export declare class ConflictingAliasesList extends SpeakeasyBase {
    items?: ConflictingAliases[];
    maxItems?: number;
    nextMarker?: string;
    quantity?: number;
}

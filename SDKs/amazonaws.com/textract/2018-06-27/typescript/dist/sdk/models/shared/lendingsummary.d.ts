import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentGroup } from "./documentgroup";
/**
 * Contains information regarding DocumentGroups and UndetectedDocumentTypes.
 */
export declare class LendingSummary extends SpeakeasyBase {
    documentGroups?: DocumentGroup[];
    undetectedDocumentTypes?: string[];
}

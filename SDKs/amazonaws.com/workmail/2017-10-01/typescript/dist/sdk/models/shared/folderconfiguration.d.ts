import { SpeakeasyBase } from "../../../internal/utils";
import { FolderNameEnum } from "./foldernameenum";
import { RetentionActionEnum } from "./retentionactionenum";
/**
 * The configuration applied to an organization's folders by its retention policy.
 */
export declare class FolderConfiguration extends SpeakeasyBase {
    action: RetentionActionEnum;
    name: FolderNameEnum;
    period?: number;
}

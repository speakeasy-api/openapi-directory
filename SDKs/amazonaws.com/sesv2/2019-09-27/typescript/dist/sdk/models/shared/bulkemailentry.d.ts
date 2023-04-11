import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { MessageTag } from "./messagetag";
import { ReplacementEmailContent } from "./replacementemailcontent";
export declare class BulkEmailEntry extends SpeakeasyBase {
    destination: Destination;
    replacementEmailContent?: ReplacementEmailContent;
    replacementTags?: MessageTag[];
}

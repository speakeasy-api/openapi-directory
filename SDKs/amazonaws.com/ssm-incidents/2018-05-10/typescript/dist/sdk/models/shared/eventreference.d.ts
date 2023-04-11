import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An item referenced in a <code>TimelineEvent</code> that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID.
 */
export declare class EventReference extends SpeakeasyBase {
    relatedItemId?: string;
    resource?: string;
}

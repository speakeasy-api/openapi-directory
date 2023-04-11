import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review.
 */
export declare class Notification extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    controlSetId?: string;
    controlSetName?: string;
    description?: string;
    eventTime?: Date;
    id?: string;
    source?: string;
}

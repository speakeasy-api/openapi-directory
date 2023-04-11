import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type associated with the status update. This represents the current state of the object this object is on.
 */
export declare enum StatusUpdateRequestStatusTypeEnum {
    OnTrack = "on_track",
    AtRisk = "at_risk",
    OffTrack = "off_track",
    OnHold = "on_hold",
    Complete = "complete",
    Achieved = "achieved",
    Partial = "partial",
    Missed = "missed",
    Dropped = "dropped"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class StatusUpdateRequestInput extends SpeakeasyBase {
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    parent: string;
    /**
     * The type associated with the status update. This represents the current state of the object this object is on.
     */
    statusType: StatusUpdateRequestStatusTypeEnum;
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * The title of the status update.
     */
    title?: string;
}

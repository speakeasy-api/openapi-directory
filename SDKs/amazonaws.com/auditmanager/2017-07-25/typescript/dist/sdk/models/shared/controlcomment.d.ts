import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
 */
export declare class ControlComment extends SpeakeasyBase {
    authorName?: string;
    commentBody?: string;
    postedDate?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportAlreadyInProgressResponseLinks } from "./importalreadyinprogressresponselinks";
/**
 * A catalog importation is already in progress!
 */
export declare class ImportAlreadyInProgressResponse extends SpeakeasyBase {
    /**
     * The error message list
     */
    errors: BeezUPCommonUserErrorMessage[];
    /**
     * The action links
     */
    links: ImportAlreadyInProgressResponseLinks;
}

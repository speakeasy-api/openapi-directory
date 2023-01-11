import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportAlreadyInProgressResponseLinks } from "./importalreadyinprogressresponselinks";
export declare class ImportAlreadyInProgressResponse extends SpeakeasyBase {
    errors: BeezUpCommonUserErrorMessage[];
    links: ImportAlreadyInProgressResponseLinks;
}

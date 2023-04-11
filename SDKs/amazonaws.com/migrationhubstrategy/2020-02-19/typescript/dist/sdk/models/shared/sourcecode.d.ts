import { SpeakeasyBase } from "../../../internal/utils";
import { VersionControlEnum } from "./versioncontrolenum";
/**
 *  Object containing source code information that is linked to an application component.
 */
export declare class SourceCode extends SpeakeasyBase {
    location?: string;
    projectName?: string;
    sourceVersion?: string;
    versionControl?: VersionControlEnum;
}

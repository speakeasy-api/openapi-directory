import { SpeakeasyBase } from "../../../internal/utils";
import { GenericRevisionInfo } from "./genericrevisioninfo";
import { RevisionLocation } from "./revisionlocation";
/**
 * Represents the output of a <code>GetApplicationRevision</code> operation.
 */
export declare class GetApplicationRevisionOutput extends SpeakeasyBase {
    applicationName?: string;
    revision?: RevisionLocation;
    revisionInfo?: GenericRevisionInfo;
}

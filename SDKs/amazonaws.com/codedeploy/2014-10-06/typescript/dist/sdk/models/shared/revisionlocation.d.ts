import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecContent } from "./appspeccontent";
import { GitHubLocation } from "./githublocation";
import { RawString } from "./rawstring";
import { RevisionLocationTypeEnum } from "./revisionlocationtypeenum";
import { S3Location } from "./s3location";
/**
 * Information about the location of an application revision.
 */
export declare class RevisionLocation extends SpeakeasyBase {
    appSpecContent?: AppSpecContent;
    gitHubLocation?: GitHubLocation;
    revisionType?: RevisionLocationTypeEnum;
    s3Location?: S3Location;
    string?: RawString;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnum } from "./buildstatusenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
/**
 * <p>Properties describing a custom game build.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
 */
export declare class Build extends SpeakeasyBase {
    buildArn?: string;
    buildId?: string;
    creationTime?: Date;
    name?: string;
    operatingSystem?: OperatingSystemEnum;
    serverSDKVersion?: string;
    sizeOnDisk?: number;
    status?: BuildStatusEnum;
    version?: string;
}

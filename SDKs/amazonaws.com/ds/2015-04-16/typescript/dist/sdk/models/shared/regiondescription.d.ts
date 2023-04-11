import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
import { RegionTypeEnum } from "./regiontypeenum";
/**
 * The replicated Region information for a directory.
 */
export declare class RegionDescription extends SpeakeasyBase {
    desiredNumberOfDomainControllers?: number;
    directoryId?: string;
    lastUpdatedDateTime?: Date;
    launchTime?: Date;
    regionName?: string;
    regionType?: RegionTypeEnum;
    status?: DirectoryStageEnum;
    statusLastUpdatedDateTime?: Date;
    /**
     * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
     */
    vpcSettings?: DirectoryVpcSettings;
}

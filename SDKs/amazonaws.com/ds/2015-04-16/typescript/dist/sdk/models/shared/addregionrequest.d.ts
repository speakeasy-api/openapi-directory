import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
export declare class AddRegionRequest extends SpeakeasyBase {
    directoryId: string;
    regionName: string;
    /**
     * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
     */
    vpcSettings: DirectoryVpcSettings;
}

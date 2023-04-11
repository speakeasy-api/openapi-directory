import { SpeakeasyBase } from "../../../internal/utils";
import { DirectorySizeEnum } from "./directorysizeenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
import { Tag } from "./tag";
/**
 * Contains the inputs for the <a>CreateDirectory</a> operation.
 */
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    description?: string;
    name: string;
    password: string;
    shortName?: string;
    size: DirectorySizeEnum;
    tags?: Tag[];
    vpcSettings?: DirectoryVpcSettings;
}

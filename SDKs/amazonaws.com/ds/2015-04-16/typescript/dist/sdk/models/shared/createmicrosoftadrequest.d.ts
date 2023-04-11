import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
import { Tag } from "./tag";
/**
 * Creates an Managed Microsoft AD directory.
 */
export declare class CreateMicrosoftADRequest extends SpeakeasyBase {
    description?: string;
    edition?: DirectoryEditionEnum;
    name: string;
    password: string;
    shortName?: string;
    tags?: Tag[];
    vpcSettings: DirectoryVpcSettings;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    clientToken?: string;
    configurationSetName: string;
    tags?: Tag[];
}

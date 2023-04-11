import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WorkGroupConfiguration } from "./workgroupconfiguration";
export declare class CreateWorkGroupInput extends SpeakeasyBase {
    configuration?: WorkGroupConfiguration;
    description?: string;
    name: string;
    tags?: Tag[];
}

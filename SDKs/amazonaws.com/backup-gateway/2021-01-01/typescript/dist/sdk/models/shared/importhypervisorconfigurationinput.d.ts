import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ImportHypervisorConfigurationInput extends SpeakeasyBase {
    host: string;
    kmsKeyArn?: string;
    name: string;
    password?: string;
    tags?: Tag[];
    username?: string;
}

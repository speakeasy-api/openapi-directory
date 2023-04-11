import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateComponentInput extends SpeakeasyBase {
    description?: string;
    environmentName?: string;
    manifest: string;
    name: string;
    serviceInstanceName?: string;
    serviceName?: string;
    serviceSpec?: string;
    tags?: Tag[];
    templateFile: string;
}

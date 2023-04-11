import { SpeakeasyBase } from "../../../internal/utils";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
import { Tag } from "./tag";
export declare class CreateDomainRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
    tags?: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
export declare class UpdateDomainRequest extends SpeakeasyBase {
    description?: string;
    domainId: string;
    name: string;
    serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
}

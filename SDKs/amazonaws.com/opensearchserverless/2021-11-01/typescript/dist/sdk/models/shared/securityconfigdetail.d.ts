import { SpeakeasyBase } from "../../../internal/utils";
import { SamlConfigOptions } from "./samlconfigoptions";
import { SecurityConfigTypeEnum } from "./securityconfigtypeenum";
/**
 * Details about a security configuration for OpenSearch Serverless.
 */
export declare class SecurityConfigDetail extends SpeakeasyBase {
    configVersion?: string;
    createdDate?: number;
    description?: string;
    id?: string;
    lastModifiedDate?: number;
    samlOptions?: SamlConfigOptions;
    type?: SecurityConfigTypeEnum;
}

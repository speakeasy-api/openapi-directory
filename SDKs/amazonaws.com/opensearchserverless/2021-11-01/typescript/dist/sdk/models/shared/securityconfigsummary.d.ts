import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfigTypeEnum } from "./securityconfigtypeenum";
/**
 * A summary of a security configuration for OpenSearch Serverless.
 */
export declare class SecurityConfigSummary extends SpeakeasyBase {
    configVersion?: string;
    createdDate?: number;
    description?: string;
    id?: string;
    lastModifiedDate?: number;
    type?: SecurityConfigTypeEnum;
}

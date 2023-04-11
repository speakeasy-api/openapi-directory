import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
 */
export declare class ResponseAction extends SpeakeasyBase {
    block?: Record<string, any>;
    count?: Record<string, any>;
}
